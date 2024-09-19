import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/db/prisma"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
adapter: PrismaAdapter(prisma),
  providers: [Google,
    Credentials({
      credentials : {
        email : {},
        password : {}
      },
      authorize : async (credentials) => {
        
      }
    })
  ],
})