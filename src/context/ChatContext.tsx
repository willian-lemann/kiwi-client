import { createContext, useCallback, useEffect, useState } from "react";
import { socket } from "../config/socket";
import { useAuth } from "../hooks/useAuth";
import { startChat } from "../services/chat";

export interface Message {
  chatId?: string;
  author: string;
  body: string;
  type: "video" | "audio" | "text";
  date: Date;
}

interface initialState {
  messages: Array<Message>;
  connectedUsers: Array<string>;
  sendMessage: (message: Message) => void;
  onReceiveMessage: (newMessage: Message) => void;
}

export const ChatContext = createContext({} as initialState);

export const ChatProvider: React.FC = ({ children }) => {
  const { user: currentUser } = useAuth();
  const [connectedUsers, setConnectedUsers] = useState<Array<string>>([]);
  const [messages, setMessages] = useState<Array<Message>>([]);

  const sendMessage = useCallback(
    (message: Message) => {
      socket.emit("sendMessage", {
        ...message,
        chatId: currentUser?.id as string,
      });
    },
    [currentUser?.id]
  );

  const onReceiveMessage = useCallback(
    (newMessage: Message) => {
      setMessages([newMessage, ...messages]);
    },
    [messages]
  );

  const onConnectedUser = useCallback(
    (newUser) => {
      setConnectedUsers([...connectedUsers, newUser]);
    },
    [connectedUsers]
  );

  useEffect(() => {
    startChat({ onReceiveMessage, onConnectedUser });
  }, [onReceiveMessage, onConnectedUser]);

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, onReceiveMessage, connectedUsers }}
    >
      {children}
    </ChatContext.Provider>
  );
};
