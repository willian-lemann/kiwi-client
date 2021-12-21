import type { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { parseCookies } from "nookies";

import { useAuth } from "../hooks/useAuth";

import {
  Container,
  HeaderLabel,
  LoginForm,
  Input,
  ActionsContainer,
  RegisterLabel,
  SubmitButton,
} from "../styles/home.styles";

const Home: NextPage = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChangeData(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formData;

    try {
      await login({ email, password });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <HeaderLabel>Welcome to Kiwi Chat</HeaderLabel>

      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChangeData}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChangeData}
        />

        <ActionsContainer>
          <RegisterLabel>Register</RegisterLabel>
          <SubmitButton>Sign</SubmitButton>
        </ActionsContainer>
      </LoginForm>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "@kiwi.token": token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
