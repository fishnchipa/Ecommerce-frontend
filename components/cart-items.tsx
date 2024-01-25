"use client"

import React, { useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Trash } from 'lucide-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useCartContext } from '@/app/context/cart-context'

type CartItemProps = {
	id: number,
	name: string,
	price: string,
	category: string
}

const CartItem = ({
	id,
	name,
	price,
	category,
}: CartItemProps) => {

	const quantity = [1,2,3,4,"5+"]
	const [comboBox, setComboBox] = useState(true);
	const quantityInput = useRef<HTMLInputElement>(null)
	const comboValue = useRef<string>("1")
	const {cartItems, setCartItem} = useCartContext();

	const updateQuantity = () => {

		const index = cartItems.findIndex(item => item.itemId === id) 
		if (index === -1) {
			setCartItem([...cartItems, {itemId: id, quantity: parseInt(comboValue.current)}])
		} else {
			setCartItem([...cartItems.map(item => {
				if (item.itemId === id) {
					return {
						...item,
						quantity: parseInt(comboValue.current)
					}
				} else {
					return item;
				}
			})])
		}

	}

	const customQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (event.currentTarget.value === "5+") {
			setComboBox(false);

		} else {
			comboValue.current = event.currentTarget.value
			updateQuantity()
		}
	} 

	const quantityChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		if (!quantityInput.current) { return }

		comboValue.current = quantityInput.current.value
		if (quantityInput.current.value in quantity) {
			setComboBox(true)
		} else {

			updateQuantity()
		}
	}

	return (
		<div className="flex flex-row justify-between">
			<div className="flex flex-row gap-x-5">
				<img src="/acid.jpeg" alt="item" className="object-fit h-[150px] w-[150px]"/>
				<div>
					<h1 className="text-2xl font-semibold leading-none tracking-tight">{name}</h1>
					<p className="text-sm text-muted-foreground">{category}</p>
				</div>
			</div>
			<div className="mr-[12rem]">
				{
					(comboBox) ? 
					(
						<select 
							className="border rounded-md px-2 ring-offset-background focus-visible:outline-none 
							h-[2rem] w-[11.5rem] focus-visible:ring-2 focus-visible:ring-ring border-gray-700 mr-[1px] mt-[2px]
							text-[12px]" 
							onChange={(e) => customQuantity(e)} 
							defaultValue={comboValue.current}
						>
							{quantity.map((value,index) => {

								return <option key={index}>{value}</option>
							})}
						</select>
					) : 
					(
						<div className="flex gap-x-2 justify-center items-center">
							<input 
								className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
								h-[2rem] w-[6rem] focus-visible:ring-2 focus-visible:ring-ring border-gray-700 text-[12px]" 
								type="number" 
								placeholder="quantity" 
								ref={quantityInput}
							
							/>
							<button 
								className="bg-slate-900 rounded-3xl py-2 px-4 text-white text-sm hover:bg-slate-700"
								onClick={(e) => quantityChange(e)}
							>Update
							</button>
						</div>

					)
				}
			</div>
			<div className="flex flex-col justify-between items-center">
				<h1 className="text-2xl font-semibold leading-none tracking-tight">${price}</h1>
				<Trash />
			</div>
		</div>
	)
}

export default CartItem