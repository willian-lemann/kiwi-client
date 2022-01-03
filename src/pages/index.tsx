import { ChangeEvent, FormEvent, useState, useRef } from "react";
import type { GetServerSideProps, NextPage } from "next";
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
import { ModalHandles, RegisterModal } from "../components/RegisterModal";

const Home: NextPage = () => {
  const modalRef = useRef<ModalHandles>(null);
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  function handleChangeData(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formData;

    try {
      await login({ email, password });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;

      alert(errorMessage);
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
          <RegisterLabel onClick={handleOpenModal}>Register</RegisterLabel>
          <SubmitButton>Sign</SubmitButton>
        </ActionsContainer>
      </LoginForm>

      <RegisterModal ref={modalRef} />
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
