"use client";
import React, { useContext } from "react";
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Code,
  SendHorizontal,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { Context } from "@/context/ContextProvider";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    prevPrompts,
    setInput,
  } = useContext(Context);

   const {data: session} = useSession() 
  return (
    <div className="flex-1 max-w-6xl mx-auto min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>Gemini</p>
        {session ? <div className="flex items-center gap-2">
          <Image src={session.user.image} alt={session.user.image} width={30} height={30} className=" object-cover rounded-full" />
          <button className="px-4 py-1 text-white rounded-full text-sm bg-blue-500 " onClick={()=>signOut()}>Signout</button>
        </div> :
           <button className="px-4 py-1 bg-blue-500 rounded-md">Login</button>

        }
      </div>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
          { session && <div className="my-12 text-5xl font-medium p-5 flex flex-col ">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-400">
                Hello, {session.user.name}
              </p>
              <p className="font-bold text-gray-600">
                How can I help you today?
              </p>
            </div>}

            <div className="grid grid-cols-2 md:grid-cols-4  gap-4  p-5">
              <div className="h-48 p-4 bg-bgSecondaryColor  rounded-xl relative cursor-pointer">
                <p>
                  Rewrite the text below to fix any grammar and spelling
                  mistakes: ?
                </p>
                <Compass
                  size={35}
                  className="p-1 bottom-2 right-2 absolute bg-primary text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>What’s the reaction to and impact of autonomous vehicles</p>
                <Lightbulb
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Come up with a recipe for an upcoming event</p>
                <YoutubeIcon
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
              <div className="h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                <p>Evaluate and rank common camera categories</p>
                <Code
                  size={35}
                  className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
             {session &&   <Image src={session.user.image} className='object-cover rounded-full' width={40} height={40} alt={session?.user.image} />}
              <p className="text-gray-500">{recentPrompts}?</p>
            </div>
             <div className="flex items-start gap-5">
                <Image width={50} height={50} src="/gemini.png" alt="gemini.png" />
                <p
                   className="text-md font-normal loading-6 text-gray-400"
                   dangerouslySetInnerHTML={{__html:result}}
                ></p>
             </div>
          </div>
        )}

        <div className=" z-50   fixed  bottom-0 w-full max-w-[900px] px-5 m-auto">
          <form  action={submit}>
            <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
               onChange={(e)=> setInput(e.target.value)}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="Enter a prompt here"
              />
              <div className="flex cursor-pointer">
                <SendHorizontal type="submit" size={20} />
              </div>
            </div>
          </form>

          <p className="text-gray-400 bg-[#131314] text-sm text-center p-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <Link
              href="https://support.google.com"
              className=" border-b border-gray-600"
            >
              Your privacy and Gemini Apps
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiBody;
