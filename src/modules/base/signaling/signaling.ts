import type { ClientMessage } from './types';

export class Signaling {
  private static instance: Signaling;

  private socket: WebSocket | null = null;

  onMessage: ((message: ClientMessage) => void) | null = null;

  constructor() {
    if (Signaling.instance) {
      return Signaling.instance;
    }

    Signaling.instance = this;
  }

  static getInstance(): Signaling {
    if (!Signaling.instance) {
      Signaling.instance = new Signaling();
    }
    return Signaling.instance;
  }

  /**
   * connect to websocket server
   *
   * @param url the url to connect to websocket server
   */
  async connect(url: string): Promise<Signaling> {
    if (this.socket) {
      this.socket.close(1000, 'Reconnecting');
      this.socket = null;
    }

    this.socket = new WebSocket(url);

    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject();
        return;
      }

      this.socket.onerror = (error) => {
        reject(error);
      };

      this.socket.onopen = () => {
        resolve(this);
      };

      this.socket.onclose = (event) => {
        this.socket = null;
      };

      this.socket.onmessage = (event) => {
        if (!this.onMessage) {
          return;
        }

        this.onMessage(JSON.parse(event.data));
      };
    });
  }

  send(message: ClientMessage) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.error('sending message with no connection socket');
      return;
    }

    this.socket.send(JSON.stringify(message));
  }

  close() {
    if (!this.socket) {
      console.error('closing socket with no connection socket');
      return;
    }
    this.socket.close();
    this.socket = null;
  }
}
