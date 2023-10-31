import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const userSocketMap = {};

const getAllConnectedClients = (roomId) => {
  const allClientsInRoom = Array.from(
    io.sockets.adapter.rooms.get(roomId) || []
  );
  return allClientsInRoom.map((socketId) => {
    return {
      socketId,
      username: userSocketMap[socketId],
    };
  });
};

io.on('connection', (socket) => {
  // console.log('socket connected: ', socket.id);
  socket.on('join', ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit('joined', {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  socket.on('code-change', ({ roomId, code }) => {
    io.to(roomId).emit('code-change', { code });
  });
  
  socket.on('disconnecting', () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit('disconnected', {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
