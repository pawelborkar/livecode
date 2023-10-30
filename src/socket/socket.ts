import { io } from 'socket.io-client';
const URL = import.meta.env.VITE_BACKEND_URL;

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempt: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
  };
  return io(URL, options);
};
