import { loginService } from "@/service/login";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth,signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const res = await loginService({ email, password });
        console.log("response : ", res);
        
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",

  // pages: {
  //   signIn: "/login",
  // },
});