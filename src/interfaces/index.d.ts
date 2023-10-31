export interface ITab {
  id: number;
  title: string;
  language: string;
}
export interface IEditor {
  language: string;
  socketRef: unknown;
}

export interface IFile {
  id: number;
  name: string;
}

export interface IClient {
  socketId?: string;
  username: string;
}
export interface IRoomID {
  roomId: string;
}
export interface IConnectedClients {
  connectedClients: IClient[];
}
