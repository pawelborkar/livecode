import { Socket } from 'socket.io-client';

export interface ITab {
  id: number;
  title: string;
  language: string;
}
export interface IEditor {
  language: string;
  socketRef: React.MutableRefObject<Socket | null>;
}

export interface IFile {
  id: number;
  name: string;
}

export interface ISocketRef {
  current: Socket | null;
}

export interface ISocketChildComponentProps {
  socketRef: React.MutableRefObject<Socket | null>;
}
export interface IClient {
  socketId?: string;
  username: string;
}

export interface ISocketResponse {
  clients: IClient[];
  username: string;
  files: IFile[];
}
export interface IRoomID {
  roomId: string;
}
export interface ICode {
  code: string;
}
export interface IConnectedClients {
  connectedClients: IClient[];
}
