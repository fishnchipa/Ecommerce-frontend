"use client"


import Cart from "@/components/cart";
import NavBar from "@/components/ui/nav-bar";
import { SessionProvider } from "next-auth/react";
import CartContextProvider from "../context/cart-context";




export default function Page() {


	return (
		<>
			
			<SessionProvider>
				<NavBar />
				<div className="mx-[5rem]">
					<CartContextProvider>
						<Cart />
					</CartContextProvider>
				</div>

			</SessionProvider>
		</>
	)
}