import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import {
  loginRequest,
  registerRequest,
  getUserProfileRequest,
} from "../services/auth";
import Router from "next/router";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {}

interface User {
  id: string;
  avatar: string | null;
  name: string;
  email: string;
}

interface initialState {
  isAuthenticated: boolean;
  user: User | null;
  login: (login: LoginData) => Promise<void>;
  register: (register: RegisterData) => Promise<void>;
}

export const AuthContext = createContext({} as initialState);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function login({ email, password }: LoginData) {
    const { data } = await loginRequest({ email, password });

    const { token, ...user } = data;

    setCookie(undefined, "@kiwi.token", token, {
      maxAge: 60 * 60 * 1, // 1hour,
    });

    setUser(user);

    Router.push("/chat");
  }

  async function register({ email, password }: RegisterData) {}

  useEffect(() => {
    const { "@kiwi.token": token } = parseCookies();

    if (token) {
      getUserProfileRequest().then((response) => setUser(response.data));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
