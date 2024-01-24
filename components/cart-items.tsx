"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios';
import { DefaultSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react'

interface User extends DefaultSession {
	id: string
}


const CartItems = () => {
	const { data: session } = useSession()
	const items = useRef<ItemType[]>([]);

	useEffect(() => {
		if (session) {
			const user = session.user as User;

			axios.post("http://localhost:8080/cart", {
				id: user.id
			})
			.then(response => {
				items.current = response.data
				console.log(response.data);
			})
		} else {
			console.log("yo")
		}
	})




	return (
		<div>
			{items.current.map(product => {
				return <p key={product.id}>{product.name}</p>
			})}
		</div>
	)
}

export default CartItems