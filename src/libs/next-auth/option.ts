import { NextAuthOptions, AuthOptions } from "next-auth";
import { credentialProvider } from "./credential";
import { refreshToken } from "./api";
import { signOut } from "next-auth/react";

async function refreshAccessToken(token: any) {
  // console.log("Now refreshing the expired token...");
  try {
    const response = await refreshToken(token.refreshToken);
    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    const decodedAccessToken = JSON.parse(
      Buffer.from(
        refreshedTokens.result.signature.access.split(".")[1],
        "base64"
      ).toString()
    );

    return {
      ...token,
      accessToken: refreshedTokens.result.signature.access,
      refreshToken:
        refreshedTokens.result.signature.refresh ?? token.refreshToken, // Fall back to old refresh token
      accessTokenExpires: decodedAccessToken["exp"] * 1000,
      error: "",
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
  providers: [credentialProvider],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.result.signature.access;
        token.refreshToken = user.result.signature.refresh;

        const decodedAccessToken = JSON.parse(
          Buffer.from(
            user.result.signature.access.split(".")[1],
            "base64"
          ).toString()
        );

        if (decodedAccessToken) {
          token.userId = decodedAccessToken["sub"] as string;
          token.accessTokenExpires = decodedAccessToken["exp"] * 1000;
        }
      }

      if (
        token.accessTokenExpires &&
        Date.now() < Number(token.accessTokenExpires)
      ) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      if (token) {
        session.accessToken = token.accessToken;
        session.error = token.error;
        // const res = await getUserInfo(token.accessToken);
        // const user = await res.json();
        // session.accessToken = token.accessToken;
        // session.refreshToken = token.refreshToken;
        // session.division = user.result.division;
        // session.department = user.result.department;
        // session.section = user.result.section;
        // session.unit = user.result.unit;
        // session.position = user.result.position;
        // session.area = user.result.area;
        // session.email = user.result.email;
        // session.name = user.result.name;
        // session.company = user.result.company;
        // session.phone = user.result.phone;
        // session.member = user.result.member;
        // session.url = user.result.url;
      }

      if (token.error === "RefreshAccessTokenError") {
        signOut();
      }

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthOptions;
