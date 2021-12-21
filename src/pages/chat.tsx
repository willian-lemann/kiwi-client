import type { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { useChat } from "../hooks/useChat";

import {
  Container,
  MessagesListContainer,
  MessageList,
  MessageInputContainer,
  MessageInput,
  SendMessageButton,
  MessageItem,
} from "../styles/chat.styles";
import { parseCookies } from "nookies";
import { useAuth } from "../hooks/useAuth";

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
  const { user: currentUser } = useAuth();
  const { messages, sendMessage } = useChat();

  function handleSendMessage() {
    sendMessage({
      author: currentUser?.id as string,
      body: messageText,
      type: "text",
      date: new Date(),
    });

    setMessageText("");
  }

  return (
    <Container>
      <MessagesListContainer>
        <MessageList>
          {messages.map((message) => {
            const isCurrentUserSender = message.author === currentUser?.id;

            return (
              <MessageItem
                key={Math.random()}
                isCurrentUserSender={isCurrentUserSender}
              >
                {message.body}
              </MessageItem>
            );
          })}
        </MessageList>

        <MessageInputContainer>
          <MessageInput
            className="chat-input"
            placeholder="Type here..."
            value={messageText}
            onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) =>
              setMessageText(target.value)
            }
          />

          <SendMessageButton onClick={handleSendMessage}>
            Send Message
          </SendMessageButton>
        </MessageInputContainer>
      </MessagesListContainer>
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
