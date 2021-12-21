import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121315;
`;

export const HeaderLabel = styled.h1`
color: white;
font-size: 3rem;
`;

export const LoginForm = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: #444;
  padding: 0rem 1rem;
  color: white;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 3px;
  border: none;
  margin-bottom: 2rem;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterLabel = styled.span`
  color: white;
  cursor: pointer;
  margin-left: 2rem;
`;

export const SubmitButton = styled.button`
  width: auto;
  padding: 0.5rem 3rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`;
