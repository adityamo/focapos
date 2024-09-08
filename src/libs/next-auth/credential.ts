import CredentialsProvider from "next-auth/providers/credentials";
import { loginRequest } from "./api";

export const credentialProvider = CredentialsProvider({
  name: "credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const payload = {
      username: credentials?.username,
      password: credentials?.password,
    };
    if (!payload) {
      throw new Error("No Credentials Provide");
    }
    const res = await loginRequest(payload);

    const access = await res.json();

    if (!res.ok) {
      return null;
    }

    if (res.ok && access) {
      return access;
    }

    return null;
  },
});
