import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { MdClose } from "react-icons/md";

export const OverlayContainer = styled(AnimatePresence)``;

export const Container = styled(motion.div)`
  background-color: white;
  height: 500px;
  width: 500px;
  border-radius: 3px;
  opacity: 1;
  position: absolute;
`;

export const Content = styled.div`
  padding: 1rem 3rem;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
`;

export const CloseIcon = styled(MdClose)`
  right: 40px;
  top: 17px;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
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
  align-self: flex-end;
  cursor: pointer;
`;
