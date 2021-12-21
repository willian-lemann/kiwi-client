import { ChatProvider } from "../context/ChatContext";
import { AuthProvider } from "./AuthContext";

export const Provider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ChatProvider>{children}</ChatProvider>
    </AuthProvider>
  );
};
