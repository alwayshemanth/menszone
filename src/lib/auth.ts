import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const findUser = await prisma.user.findFirst({
          where: {
            email: email,
          },
          select: {
            password: true,
            email: true,
            id: true,

          },
        });

        if (
          findUser &&
          findUser.password &&
          (await bcrypt.compare(password, findUser.password))
        ) {
          // Return user details if authentication is successful
          const obj = {
            id: findUser.id,
            email: findUser.email
          };

          // console.log(obj)
          return obj;
          
        }

        return null;
      },
    }),
  ],
  
});
