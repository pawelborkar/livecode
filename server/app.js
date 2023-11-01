import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { ACTIONS } from './utils/Actions.js';

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
  socket.on(ACTIONS.JOIN, ({ roomId, username, files }) => {
    userSocketMap[socket.id] = [username, files];
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        username,
        socketId: socket.id,
        files,
      });
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    io.to(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on(ACTIONS.FILE_ADD, ({ roomId, files }) => {
    io.to(roomId).emit(ACTIONS.FILE_ADD, { files });
  });

  socket.on(ACTIONS.DISCONNECTING, () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id][0],
        files: userSocketMap[socket.id][1],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
