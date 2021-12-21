import { socket } from "../config/socket";

import { Message } from "../context/ChatContext";

interface ChatHandles {
  onReceiveMessage: (newMessage: Message) => void;
}

export const startChat = (callbacks: ChatHandles) => {
  const { onReceiveMessage } = callbacks;

  socket.on("onReceiveMessage", (message) => onReceiveMessage(message));
};
