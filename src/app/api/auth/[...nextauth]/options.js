import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"

export const authOptions= {
    adapter:PrismaAdapter(prisma),
     providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages:{
    signIn:"/login"
  },
  secret: process.env.NEXT_AUTH_SECRET
};

export const getAuthSession = () => getServerSession(authOptions);