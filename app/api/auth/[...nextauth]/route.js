import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default async function auth(req, res) {
  const providers = [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ];

  return await NextAuth(req, res, {
    providers,
    theme: {
      colorScheme: "dark",
      brandColor: "#262626",
      logo: "https://i.ibb.co/ByRbF6x/logo.png",
      buttonText: "#262626",
    },
    callbacks: {
      session: async ({ session, token }) => {
        if (session?.user) {
          session.user.id = token.uid;
        }
        return session;
      },
      jwt: async ({ user, token }) => {
        if (user) {
          token.uid = user.id;
        }
        return token;
      },
    },
    adapter: MongoDBAdapter(clientPromise),
    session: {
      strategy: "jwt",
    },
  });
}

export { auth as GET, auth as POST };
