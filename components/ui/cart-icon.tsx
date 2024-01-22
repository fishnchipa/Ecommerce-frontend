"use client"

import React, { HTMLAttributes } from 'react'
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CartIcon = () => {
	const router = useRouter()

	return (
		<>
			<button className="h-fit" onClick={() => {router.push("/cart")}}>
				<ShoppingCart />
			</button>
		</>
	)
}

export default CartIcon