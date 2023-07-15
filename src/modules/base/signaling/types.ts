export interface ClientMessageOptions {
  broadcast: boolean
  echo: boolean
}

export interface ClientMessage {
  type: string
  user_id: string
  room_id?: Number
  payload?: { [key: string]: any }
  options?: ClientMessageOptions
}
