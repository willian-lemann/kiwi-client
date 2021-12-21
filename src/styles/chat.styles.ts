import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

export const MessagesListContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 800px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .chat-input {
    padding: 1rem 1rem;

    textarea {
      background-color: #dae0e6;
    }
  }
`;

export const MessageList = styled.ul`
  padding: 1rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

interface MessageItemProps {
  isCurrentUserSender: boolean;
}

export const MessageItem = styled.li<MessageItemProps>`
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: ${({ isCurrentUserSender }) =>
    isCurrentUserSender ? "white" : "#f3f3f3"};
  align-self: ${({ isCurrentUserSender }) =>
    isCurrentUserSender ? "flex-end" : "flex-start"};
  margin-bottom: 1rem;
`;

export const MessageInputContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 3px 0 0 3px;
  background-color: #f2f2f2;
  font-size: 14px;
  font-family: Roboto;
  resize: none;
`;

export const SendMessageButton = styled.button`
  width: auto;
  background-color: purple;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-left: none;
  padding: 0.5rem 1rem;
  font-family: Roboto;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
`;
