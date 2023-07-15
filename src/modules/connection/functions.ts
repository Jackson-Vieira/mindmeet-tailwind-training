// import adapter from 'webrtc-adapter';
import { v4 as uuidv4 } from 'uuid';

import { User } from './types';
import { IClientMessage } from '../signaling/types/message';
import { Signaling } from '../signaling/signaling';
import { getUserMedia } from './utils';
import logger from '../utils/logger';

// Global Variables
let localMediaStream: MediaStream;
let remoteMediaStream: MediaStream;
let peerConnection: RTCPeerConnection;

// let remoteUser: User;
let localUser: User;

function createLocalUser(displayName: string): User {
  return {
    id: uuidv4(),
    display_name: displayName,
    self_mute: false,
    self_video: false,
    self_volume: 0,
    room: null,
    peer_connection: null,
    data_channel: null,
  };
}

// updateUserVolume

function handleICECandidateEvent(ev: RTCPeerConnectionIceEvent) {
  Signaling.getInstance().send({
    type: 'ice-candidate',
    user_id: localUser.id,
    room_id: localUser.room?.id,
    payload: {
      candidate: ev.candidate,
    },
  });
}

async function handleTrackEvent(ev: RTCTrackEvent) {
  if (!remoteMediaStream) {
    remoteMediaStream = new MediaStream();
  }

  remoteMediaStream.addTrack(ev.track);

  document.getElementById('remoteVideo').srcObject = remoteMediaStream;
}

function handleNegotiationNeededEvent(ev: Event) {
  logger.info('negotiation event', ev);

  if (!peerConnection) return logger.error('peer connection is undefined');

  peerConnection
    .createOffer()
    .then((offer) => {
      peerConnection
        .setLocalDescription(offer)
        .then(() => {
          const offer: IClientMessage = {
            type: 'offer',
            user_id: localUser.id,
            room_id: localUser.room?.id,
            payload: {
              offer: peerConnection.localDescription,
            },
          };

          Signaling.getInstance().send(offer);
        })
        .catch((error) => {
          logger.error('set local description error', error);
        });
    })
    .catch((error) => {
      logger.error('create offer error', error);
    });
}

function handleICEConnectionStateChangeEvent(ev: Event) {}

function handleICEGatheringStateChangeEvent(ev: Event) {}

function handleSignalingStateChangeEvent(ev: Event) {}

// async createPeerConnection
function createPeerConnection() {
  if (peerConnection) return logger.error('peer connection already exists');

  peerConnection = new RTCPeerConnection({});

  peerConnection.onicecandidate = handleICECandidateEvent;
  peerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
  peerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
  peerConnection.ontrack = handleTrackEvent;
  peerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
  peerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
}
// addLocalAudio
// addLocalVideo

async function handleJoinMessage(message: IClientMessage) {
  if (!message.payload) return;

  localUser.room = message.payload.room;

  try {
    const stream = await getUserMedia();
    localMediaStream = stream;
    document.getElementById('localVideo').srcObject = localMediaStream;
    createPeerConnection();

    const tracks = localMediaStream.getTracks();
    tracks.forEach((track) => {
      peerConnection.addTrack(track, localMediaStream);
    });
  } catch (error) {
    handleGetUserMediaError(error as Error);
  }
}

function setUpStream() {}

function handleLeaveMessage(message: IClientMessage) {
  // Dispatch the message to the observers waiting the leave message

  // const signaling = Signaling.getInstance();

  localUser.room = null;

  peerConnection.close();
  // signaling.close();
  // removeMedia
}

async function handleOfferMessage(message: IClientMessage) {
  // Dispatch the message to the observers waiting the offer message
  if (!message.payload) return;

  createPeerConnection();

  const offer = new RTCSessionDescription(message.payload.offer);

  try {
    await peerConnection.setRemoteDescription(offer);
    await peerConnection.setLocalDescription(
      await peerConnection.createAnswer(),
    );

    const answer: IClientMessage = {
      type: 'answer',
      user_id: localUser.id,
      room_id: localUser.room?.id,
      payload: {
        answer: peerConnection.localDescription,
      },
    };

    Signaling.getInstance().send(answer);
  } catch (error) {
    console.error('handle offer message: error', error);
  }
}

function handleAnswerMessage(message: IClientMessage) {
  // Dispatch the message to the observers waiting the answer message
  if (!message.payload) return;
  const answer = new RTCSessionDescription(message.payload.answer);
  peerConnection.setRemoteDescription(answer);
}

function handleCandidateMessage(message: IClientMessage) {
  // Dispatch the message to the observers waiting the candidate message
  if (!message.payload) return;
  peerConnection.addIceCandidate(message.payload.candidate);
}

function handleUserConnectedMessage(message: IClientMessage) {
  // Dispatch the message to the observers waiting the user connected message
  if (!message.payload) return;
  remoteUser = message.payload.user;
}

function handleUserDisconnectedMessage(message: IClientMessage) {
  console.log('handle user disconnected message', message);
}

function handleGetUserMediaError(error: Error) {
  console.log(error);
}

function handleConnectionMessages(message: IClientMessage) {
  switch (message.type) {
    case 'join':
      handleJoinMessage(message);
      break;
    case 'leave':
      handleLeaveMessage(message);
      break;
    case 'disconnect':
      handleLeaveMessage(message);
      break;
    case 'offer':
      handleOfferMessage(message);
      break;
    case 'answer':
      handleAnswerMessage(message);
      break;
    case 'ice-candidate':
      handleCandidateMessage(message);
      break;
    case 'user_connected':
      handleUserConnectedMessage(message);
      break;
    case 'user_disconnected':
      handleUserDisconnectedMessage(message);
      break;
    default:
      logger.error('unknown message type', message);
  }
}

function muteLocalTrack(trackKind: string, mute: boolean) {
  localMediaStream.getTracks().forEach((track) => {
    if (track.kind === trackKind) {
      // eslint-disable-next-line no-param-reassign
      track.enabled = !mute;
    }
  });
}

// async createDataChannel
// handleDataChannelMessage (mic_volume, mic_mute, video_mute)
// handleDataChannelOpen
// handleDataChannelClose
// handleDataChannelError

export async function start() {
  const signaling = Signaling.getInstance();

  try {
    signaling.onMessage = handleConnectionMessages;
    await signaling.connect('ws://localhost:1323/ws');
  } catch (error) {
    console.error('signaling connect error', error);
  }
}

// join
export async function join(displayName: string, roomId: Number) {
  const signaling = Signaling.getInstance();

  localUser = createLocalUser(displayName);

  const JOIN_MESSAGE: IClientMessage = {
    type: 'join',
    user_id: localUser.id,
    room_id: roomId,
  };

  signaling.send(JOIN_MESSAGE);
}
