import { socket } from "../config/socket";

import { Message } from "../context/ChatContext";

interface ChatHandles {
  onReceiveMessage: (newMessage: Message) => void;
  onConnectedUser: (user: string) => void;
}

export const startChat = (callbacks: ChatHandles) => {
  const { onReceiveMessage, onConnectedUser } = callbacks;

  socket.on("onReceiveMessage", (message) => onReceiveMessage(message));

  socket.on("onConnectedUser", (user) => onConnectedUser(user));
};
