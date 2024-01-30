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
import ItemContextProvider from "./context/item-context";




export default function Home() {

  
  return (
    <>
      <SessionProvider>
        <div className="h-[2000px] w-full bg-emerald-500">

          <NavBar />
          <div className="h-screen bg-slate-600 flex justify-center items-center">

            <Banner width={0} height={0} image={"/hero-bg.png"} />
          </div>
        </div>





        {/* <div className="flex flex-wrap justify-center items-center h-fit w-full pl-4 mb-[5rem]">
          <ItemContextProvider>
            <AddItemCard /> 
            <ContentMain />
          </ItemContextProvider>
        </div> */}
      </SessionProvider>
    </>
  )
}
