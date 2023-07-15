export interface Room {
  id: Number
  display_name: string
  created_at?: Date
  // started_at: Date;
}

export interface User {
  id: string
  display_name: string
  self_mute: boolean
  self_video: boolean
  self_volume: number
  room: Room | null
  peer_connection: RTCPeerConnection | null
  data_channel: RTCDataChannel | null
}
