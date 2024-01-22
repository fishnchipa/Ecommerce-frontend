

import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Banner from "@/components/ui/banner";
import ItemCard from "@/components/ui/item-card";




export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login")
  }

  

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className="h-[20rem] px-[3rem] w-full">
        <div className="flex w-full">
          <ItemCard />
        </div>
        
      </div>
    </div>
  )
}
