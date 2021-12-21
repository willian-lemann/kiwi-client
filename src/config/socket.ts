import { parseCookies } from "nookies";
import socketio from "socket.io-client";

const socketUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const socket = socketio(socketUrl);
