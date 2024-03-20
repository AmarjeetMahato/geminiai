"use client"
import { FcGoogle } from "react-icons/fc";

import React from 'react'
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  const googleLogin = async () => {
        try {
         const res = await signIn("google",{
           callbackUrl:"/"
         });
        } catch (error) {
            console.log(error);  
        }
  }
  return (
    <div className='grid place-content-center h-screen bg-slate-100'>
      <div className='flex flex-col justify-center rounded-md gap-5 items-center h-[50vh] w-[400px] bg-white shadow-md'>
        <Image src="/gemini.png" className='object-cover' width={40} height={40} alt="logo" />
        <p className="text-md font-bold">Log in to continue</p>
        <div className="space-y-2">
          <button 
            onClick={googleLogin}
          className="flex items-center px-2 rounded-md py-1 gap-x-2 bg-transparent text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-pink-500 hover:border-none hover:text-white border border-blue-500">
            <FcGoogle size={22} />
            <span>Sign in with Google</span>
          </button>
          <button
             onClick={() => signIn("github")}
          className="flex items-center px-2 py-1 rounded-md gap-x-2 bg-transparent text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-pink-500 hover:border-none hover:text-white border border-blue-500">
            <AiOutlineGithub size={22} />
            <span>Sign in with Github</span>
          </button>
        </div>
        <Link
          href="/"
          className="text-center text-md text-blue-800 cursor-pointer underline"
        >
          Go to home page
        </Link>
      </div>

    </div>
  )
}

export default Login