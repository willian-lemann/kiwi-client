import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogOut = styled.a`
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: transparent;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #444;
    color: white;
  }
`;

export const HeaderLabel = styled.span`
  margin: 0 auto;
  font-size: 24px;
  margin-bottom: 3rem;
`;

export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConnectedUsers = styled.ul`
  background-color: #999;
  padding: 0rem 0.4rem;
  display: flex;
  flex-direction: column;
`;

export const ConnectedUser = styled.li``;

export const MessagesListContainer = styled.div`
  height: 600px;
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
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageItem = styled.li`
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: #f3f3f3;
  align-self: flex-start;
  margin-bottom: 1.1rem;
`;

export const Author = styled.strong``;

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
