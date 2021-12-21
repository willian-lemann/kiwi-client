import { parseCookies } from "nookies";
import socketio from "socket.io-client";

const socketUrl = process.env.API_URL as string;

export const socket = socketio(socketUrl);
