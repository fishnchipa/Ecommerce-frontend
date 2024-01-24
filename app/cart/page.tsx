"use client"

import CartItems from "@/components/cart-items";
import { SessionProvider } from "next-auth/react";




export default function Page() {


	return (
		<>
			<SessionProvider>
				<CartItems />

			</SessionProvider>
		</>
	)
}