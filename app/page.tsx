

import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";




export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      {session && (
        <h1>This is the home page</h1>
      )}

    </div>
  )
}
