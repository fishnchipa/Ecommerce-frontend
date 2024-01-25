"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios';
import { DefaultSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react'
import CartItem from './cart-items';
import { useForm } from 'react-hook-form';
import { useCartContext } from '@/app/context/cart-context';

interface User extends DefaultSession {
	id: string
}


const CartItems = () => {
	const { data: session } = useSession()
	const items = useRef<ItemType[]>([]);
	const { cartItems } = useCartContext();

	useEffect(() => {
		if (session) {
			const user = session.user as User;

			axios.post("http://localhost:8080/cart", {
				id: user.id
			})
			.then(response => {
				items.current = response.data
			})
		}
	})


	const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		console.log(cartItems)
	}

	return (
		<div className=" ">
			<div className="flex flex-row justify-between">
				<h1>Product</h1>
				<h1>Quantity</h1>
				<h1>Price</h1>
			</div>
			<form>
				{items.current.map(product => {
					return (
						<CartItem 
							key={product.id} 
							id={product.id} 
							name={product.name} 
							price={product.price} 
							category={product.category} 
						/>
					)
				})}
				<button onClick={(e) => onClick(e)}>Click Me</button>
			</form>
		</div>
	)
}

export default CartItems