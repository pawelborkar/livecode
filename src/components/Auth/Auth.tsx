import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
} from '@nextui-org/react';
import { useAtom } from 'jotai';
import { customRandom, random, urlAlphabet } from 'nanoid';
import { roomIdAtom, userNameAtom } from '../../globalStates';

const Auth = () => {
  const Navigate = useNavigate();
  const [roomId, setRoomId] = useAtom(roomIdAtom);
  const [username, setUsername] = useAtom(userNameAtom);
  const handleJoinRoom = () => {
    if (!roomId || !username) {
      toast.error('Room ID and username is required');
      return;
    }
    Navigate(`/playground/${roomId}`);
  };
  const handleCreateNewRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nanoid = customRandom(urlAlphabet, 11, random);
    const id = nanoid();
    setRoomId(id);
    toast.success('Created a new room');
  };

  const handleInputEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleJoinRoom();
    }
  };

  return (
    <div className="dark flex flex-col justify-center items-center bg-[url('src/assets/bg.jpg')]   h-screen w-screen blur-50">
      <Card className="opacity-90 z-30 max-w-full w-[340px] h-[400px]">
        <CardHeader className="flex flex-col justify-center items-center">
          <Image width={50} alt="Logo" src="src/assets/logo.png" />
        </CardHeader>
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Room ID"
              placeholder="Enter or Paste the room ID"
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <Input
              isRequired
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              value={username}
              onKeyUp={handleInputEnter}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="flex gap-2 justify-end">
              <Button fullWidth color="primary" onClick={handleJoinRoom}>
                Login
              </Button>
            </div>
            <p className="text-small">
              Don't have an invite?{' '}
              <div className="flex gap-3 mt-2 justify-end">
                <Button fullWidth color="success" onClick={handleCreateNewRoom}>
                  Create New Room
                </Button>
              </div>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Auth;
