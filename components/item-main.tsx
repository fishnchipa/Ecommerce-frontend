"use client"

import { addToCart } from '@/app/api/db/database';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const ItemMain = ({name, itemId}: {name: string, itemId:string}) => {
	const { data: session } = useSession();
	const router = useRouter();
	const submit = () => {
		const user = session?.user as User

		addToCart(user.id, itemId!)
		router.push("/cart")
	}

	return (
		<div className="flex pt-[8rem] mx-[5rem] h-screen bg-red-500">
			<div className="h-[10%] relative box-border p-[20%] bg-emerald-500">
				<Image src={"/acid.jpeg"} fill alt={"product"}/>
			</div>
			<div className="bg-orange-500 h-full w-full flex flex-col justify-between items-center p-5">
				<h1 className="w-full font-semibold text-2xl tiger">{name}</h1>
				<button 
					className="bg-slate-900 rounded-3xl py-2 px-4 text-white hover:bg-slate-700 mb-[8rem]"
					onClick={submit}
				>
					Add to Cart
				</button>
			</div>
			
		</div>
	)
}

export default ItemMain