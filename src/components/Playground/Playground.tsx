import { useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';
import { useAtom } from 'jotai';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { initSocket } from '../../socket/socket';
import { FileExplorer, Tabs, Result, ResizeHandle } from '../../components';
import { ACTIONS } from '../../utils/Actions';
import {
  connectedUsersAtom,
  filesAtom,
  roomIdAtom,
  userNameAtom,
} from '../../globalStates';
import { IClient, ISocketResponse } from '../../interfaces';

const Playground = () => {
  const socketRef = useRef<Socket | null>(null);
  const Navigate = useNavigate();
  const [roomId] = useAtom(roomIdAtom);
  const [currentUsername] = useAtom(userNameAtom);
  const [files, setFiles] = useAtom(filesAtom);
  const [clients, setClients] = useAtom(connectedUsersAtom);

  useEffect(() => {
    if (!roomId || !currentUsername) {
      Navigate('/');
      return;
    }

    const handleSocketError = (err: unknown) => {
      console.log('Socket Error: ', err);
      toast.error('Socket connection failed, try again later.');
      Navigate('/');
    };

    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on('connect_error', (err: unknown) =>
        handleSocketError(err)
      );

      socketRef.current.on('connect_failed', (err: unknown) =>
        handleSocketError(err)
      );

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: currentUsername,
        files,
      });

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, files }: ISocketResponse) => {
          console.log('clients', clients);
          if (username !== currentUsername) {
            toast.success(`${username} joined the room.`);
          }
          setClients(clients);
          setFiles(files);
        }
      );

      // Listening for disconnected
      socketRef.current.on(
        ACTIONS.DISCONNECTED,
        ({ socketId, username }: IClient) => {
          toast(`${username} left the room`, {
            icon: '👏',
          });
          setClients((prev) =>
            prev.filter((client) => client.socketId !== socketId)
          );
        }
      );
    };

    init();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNECTED);
      }
    };
  }, []);

  return (
    <div className="max-h-screen max-w-screen">
      <PanelGroup
        autoSaveId="example"
        direction="horizontal"
        className="h-screen"
      >
        <Panel
          className="flex flex-col"
          collapsible={true}
          defaultSize={20}
          order={1}
        >
          <FileExplorer socketRef={socketRef} />
        </Panel>
        <ResizeHandle />
        <Panel
          className="flex flex-col"
          collapsible={true}
          defaultSize={80}
          order={2}
        >
          <Tabs socketRef={socketRef} />
        </Panel>
        <ResizeHandle />
        <Panel
          className="flex flex-col"
          collapsible={true}
          defaultSize={20}
          order={3}
        >
          <Result />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Playground;
