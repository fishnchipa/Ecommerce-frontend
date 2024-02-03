"use client"

import { addToCart } from '@/app/api/db/database';
import ItemMain from '@/components/item-main';
import NavBar from '@/components/ui/nav-bar';
import { User } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'
import React from 'react'

function page({ params }: { params: { product: string }}) {

	const searchParams =  useSearchParams();


	const itemId = searchParams.get("id")
	const category = searchParams.get("category")
	const price = searchParams.get("price")

	return (
		<>
			<SessionProvider>

				<NavBar />
				<ItemMain name={params.product} itemId={itemId!}/>
			</SessionProvider>
		</>
	)
}

export default page