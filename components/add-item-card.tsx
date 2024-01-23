"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ItemFormSchema, ItemFormType } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';

export default function AddItemCard() {

	const [submitError, setSubmitError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<ItemFormType>({
		resolver: zodResolver(ItemFormSchema)
	});

	const onSubmit = async (data: ItemFormType) => {
		const response = await axios.post("http://localhost:8080/items/create", data);
		console.log("Subed");
		if (!response.status) {
			setSubmitError(true);
		}
		reset();
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Add Item to Store</CardTitle>
				<CardDescription>
					Add name, price and category to items
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-y-3" id="item-form" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700"  
							placeholder="Name" 
							{...register("name")}
						/>
						{(errors.name) && (
							<h1>Name to short</h1>
						)}
					</div>
					<div>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700"  
							placeholder="Price" 
							{...register("price")}
							type="number"
						/>
						{(errors.price) && (
							<h1>{errors.price.message} </h1>
						)}
					</div>
					<div>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700"  
							placeholder="Category" 
							{...register("category")}
						/>
						{(errors.category) && (
							<h1>Category to short </h1>
						)}
					</div>
				</form>
			</CardContent>
			<CardFooter>
				<Button form="item-form" disabled={isSubmitting}>Submit</Button>
			</CardFooter>
		</Card>
	)
}
