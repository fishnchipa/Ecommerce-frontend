"use client"

import axios from 'axios'
import { DefaultSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

interface User extends DefaultSession {
	id: string
}

const AddToCart = ({itemId}: {itemId: number}) => {
	const { data: session, status } = useSession()

	const user = session?.user as User
	const addToCart = () => {
		axios.post("http://localhost:8080/cart/add", {
			id: {
				user: user.id,
				item: itemId
			}
		})
	}

	return (
		<button 
			className="bg-slate-900 rounded-3xl py-2 px-4 text-white hover:bg-slate-700" 
			onClick={addToCart}
		>
			Add to Cart
		</button>
	)
}

export default AddToCart