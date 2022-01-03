import type { GetServerSideProps, NextPage } from "next";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useChat } from "../hooks/useChat";

import {
  Container,
  LogOut,
  HeaderLabel,
  MessagesListContainer,
  MessageList,
  MessageInputContainer,
  MessageInput,
  SendMessageButton,
  MessageItem,
  ChatContainer,
  ConnectedUsers,
  Author,
  ConnectedUser,
} from "../styles/chat.styles";
import { parseCookies } from "nookies";
import { useAuth } from "../hooks/useAuth";
import Router from "next/router";

interface Message {
  author: string;
  body: string;
  date: Date;
  type: string;
}

interface ChatProps {
  email: string;
}

const Chat: NextPage<ChatProps> = () => {
  const [messageText, setMessageText] = useState("");
  const { user: currentUser, logout } = useAuth();
  const { messages, connectedUsers, sendMessage } = useChat();

  const handleSendMessage = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      if (!messageText && key === "Enter") return event.preventDefault();

      if (!messageText) return;

      if (!event) {
        sendMessage({
          author: currentUser?.name as string,
          body: messageText,
          type: "text",
          date: new Date(),
        });

        setMessageText("");
      }

      if (key === "Enter") {
        event.preventDefault();

        sendMessage({
          author: currentUser?.name as string,
          body: messageText,
          type: "text",
          date: new Date(),
        });

        setMessageText("");
      }
    },
    [currentUser?.name, messageText, sendMessage]
  );

  function handleLogout() {
    logout();

    Router.push("/");
  }

  return (
    <Container>
      <LogOut onClick={handleLogout}>Log out</LogOut>
      <HeaderLabel>Chat with your friends, free and randomly</HeaderLabel>
      <ChatContainer>
        <ConnectedUsers>
          {connectedUsers.map((connectedUser) => (
            <ConnectedUser key={connectedUser}>{connectedUser}</ConnectedUser>
          ))}
        </ConnectedUsers>

        <MessagesListContainer>
          <MessageList>
            {messages.map((message) => (
              <MessageItem key={Math.random()}>
                <Author>{message.author}:</Author> {message.body}
              </MessageItem>
            ))}
          </MessageList>

          <MessageInputContainer>
            <MessageInput
              className="chat-input"
              placeholder="Type here and ENTER to send message..."
              value={messageText}
              onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) =>
                setMessageText(target.value)
              }
              onKeyDown={(event: KeyboardEvent) => handleSendMessage(event)}
            />
          </MessageInputContainer>
        </MessagesListContainer>
      </ChatContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "@kiwi.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Chat;
