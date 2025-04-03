import { loginService } from "@/service/login";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try {
          const user = await loginService(credentials);

          if (!user) {
            throw new Error("Invalid credentials");
          }
           console.log("Data User: ",user);
          return user.payload;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {

      if (user) {
        token.user = user;
      }

      return token; // Ensure token is always returned
    },
    session: async ({ session, token }) => {

      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
});