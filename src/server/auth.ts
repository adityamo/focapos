import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import { prisma } from "@/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User as UserModel } from "@prisma/client";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface User extends UserModel {
    id: number; // <- here it is
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sigin", // Customize the login page path
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        };

        if (!payload.email || !payload.password) {
          throw new Error("Email and Password required");
        }

        const user = await prisma.user.findUnique({
          where: { email: payload.email },
        });

        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const isValidPassword = await bcrypt.compare(
          payload.password,
          user.password
        );

        if (!isValidPassword) {
          return null;
        }

        return user;
        // return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
