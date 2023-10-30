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

io.on('connection', (socket) => console.log('socket connected: ', socket.id));

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
