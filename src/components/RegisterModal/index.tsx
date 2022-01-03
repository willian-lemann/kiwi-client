/* eslint-disable react/display-name */
import {
  useImperativeHandle,
  forwardRef,
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { useAuth } from "../../hooks/useAuth";

export interface ModalHandles {
  openModal: () => void;
}

import {
  OverlayContainer,
  Container,
  Content,
  Header,
  HeaderLabel,
  CloseIcon,
  FormContainer,
  Input,
  SubmitButton,
  RegisterLabel,
  ActionsContainer,
} from "./styles";

interface RegisterModalProps {}

export const RegisterModal = forwardRef<ModalHandles, RegisterModalProps>(
  (props, ref) => {
    const { register } = useAuth();
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      name: "",
      password: "",
    });

    const openModal = useCallback(() => {
      setVisible(true);
    }, []);

    function handleCloseModal() {
      setVisible(false);
    }

    async function handleSubmit(event: FormEvent) {
      event.preventDefault();

      const { email, password, name } = formData;

      try {
        await register({ email, name, password });
      } catch (error: any) {
        const errorMessage =
          error?.response?.message || "Error during registration";

        alert(errorMessage);
      }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }

    useImperativeHandle(ref, () => ({
      openModal,
    }));

    return (
      <OverlayContainer>
        {visible && (
          <Container
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
          >
            <Content>
              <Header>
                <HeaderLabel>Register</HeaderLabel>
                <CloseIcon onClick={handleCloseModal} size={28} />
              </Header>

              <FormContainer onSubmit={handleSubmit}>
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder="Type your email"
                />
                <Input
                  name="name"
                  onChange={handleChange}
                  placeholder="Type your name"
                />
                <Input
                  name="password"
                  onChange={handleChange}
                  placeholder="Type your secure password"
                />

                <ActionsContainer>
                  <RegisterLabel onClick={handleCloseModal}>
                    Cancel
                  </RegisterLabel>
                  <SubmitButton>Register</SubmitButton>
                </ActionsContainer>
              </FormContainer>
            </Content>
          </Container>
        )}
      </OverlayContainer>
    );
  }
);
