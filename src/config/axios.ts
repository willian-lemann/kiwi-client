import { NextPageContext, NextApiRequest } from "next";
import axios, { HeadersDefaults } from "axios";
import { parseCookies } from "nookies";

export const baseURL = "http://localhost:3333";

export function getAPIClient(context?: any) {
  const { "@kiwi.token": token } = parseCookies(context);

  const api = axios.create({
    baseURL,
  });

  interface Headers extends HeadersDefaults {
    Authorization: string;
  }

  if (token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as Headers;
  }

  return api;
}

export const api = getAPIClient();
