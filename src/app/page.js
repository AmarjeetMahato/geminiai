import GeminiBody from "@/components/GeminiBody";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex contain">
       <Sidebar/>
       <GeminiBody/>
     </main>
  );
}
