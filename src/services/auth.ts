import { api } from "../config/axios";

interface LoginRequestData {
  email: string;
  password: string;
}

interface LoginResponseData {
  id: string;
  avatar: string | null;
  name: string;
  email: string;
  token: string;
}

interface RegisterRequestData extends LoginRequestData {
  name: string;
}

export const loginRequest = async (loginRequestData: LoginRequestData) => {
  const response = await api.post<LoginResponseData>(
    "/auth/login",
    loginRequestData
  );
  return response;
};

export const registerRequest = async (
  registerRequestData: RegisterRequestData
) => {
  const response = await api.post("/auth/register", registerRequestData);
  return response;
};

export const getUserProfileRequest = async () => {
  const response = await api.get("/profile");
  return response;
};
