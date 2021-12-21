import { parseCookies } from "nookies";
import socketio from "socket.io-client";

const socketUrl = "http://localhost:3333";

export const socket = socketio(socketUrl);
