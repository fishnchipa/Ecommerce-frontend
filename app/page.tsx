

import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Banner from "@/components/ui/banner";




export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <Banner width={700} height={500} image={"banner.png"}/>
      <div className="w-full h-[20rem] bg-gray-400">
        h
        
        </div>
    </div>
  )
}
