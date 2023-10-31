import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { initSocket } from '../../socket/socket';
import { ACTIONS } from '../../utils/Actions';
import { FileExplorer, Tabs, Result, ResizeHandle } from '../../components';
import {
  connectedUsersAtom,
  roomIdAtom,
  userNameAtom,
} from '../../globalStates';

const Playground = () => {
  const socketRef = useRef(null);
  const Navigate = useNavigate();
  const [roomId] = useAtom(roomIdAtom);
  const [currentUsername] = useAtom(userNameAtom);
  const [, setClients] = useAtom(connectedUsersAtom);

  if (!roomId || !currentUsername) {
    Navigate('/');
  }

  const handleSocketError = (err: unknown) => {
    console.log('Socket Error: ', err);
    toast.error('Socket connection failed, try again later.');
    Navigate('/');
  };

  useEffect(() => {
    const init = async () => {  
      socketRef.current = await initSocket();
      socketRef.current?.on('connect_error', (err: unknown) =>
        handleSocketError(err)
      );
      socketRef.current?.on('connect_failed', (err: unknown) =>
        handleSocketError(err)
      );
      socketRef.current?.emit(ACTIONS.JOIN, {
        roomId,
        username: currentUsername,
      });

      // Listening for joined event
      socketRef.current?.on(ACTIONS.JOINED, ({ clients, username }: any) => {
        if (username !== currentUsername) {
          toast.success(`${username} joined the room.`);
        }
        setClients(clients);
      });

      // Listening for disconnected
      socketRef.current?.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast(`${username} left the room`, {
          icon: '👏',
        });
        setClients((prev) =>
          prev.filter((client) => client.socketId !== socketId)
        );
      });
    };
    init();
    return () => {
      socketRef.current?.disconnect();
      socketRef.current?.off(ACTIONS.JOINED);
      socketRef.current?.off(ACTIONS.DISCONNECTED);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <FileExplorer />
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
