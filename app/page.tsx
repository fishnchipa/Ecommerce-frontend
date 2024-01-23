"use client"

import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Banner from "@/components/ui/banner";
import ItemCard from "@/components/ui/item-card";
import AddItemCard from "@/components/add-item-card";
import ContentMain from "@/components/content-main";
import NavBar from "@/components/ui/nav-bar";
import { SessionProvider } from "next-auth/react";




export default async function Home() {
  // const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/login")
  // }

  

  return (
    <>
      <SessionProvider>

        <NavBar />
        <div className="flex justify-center items-center h-full w-full mx-[3rem] ">
          <AddItemCard />
          <ContentMain />
        </div>
      </SessionProvider>
    </>
  )
}
