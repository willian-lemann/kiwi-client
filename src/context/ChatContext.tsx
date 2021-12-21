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
  sendMessage: (message: Message) => void;
  onReceiveMessage: (newMessage: Message) => void;
}

export const ChatContext = createContext({} as initialState);

export const ChatProvider: React.FC = ({ children }) => {
  const { user: currentUser } = useAuth();
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
      console.log(newMessage);

      setMessages([newMessage, ...messages]);
    },
    [messages]
  );

  function onCreateNewChat() {}

  useEffect(() => {
    startChat({ onReceiveMessage });
  }, [onReceiveMessage]);

  return (
    <ChatContext.Provider value={{ messages, sendMessage, onReceiveMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
