import socketio from "socket.io-client";
import { baseURL } from "./axios";

export const socket = socketio(baseURL);
