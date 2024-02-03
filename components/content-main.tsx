"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from './ui/item-card';
import { useItemContext } from '@/app/context/item-context';

const ContentMain = () => {

	const [content, setContent] = useState<Array<ItemType> | null>(null)
	const context = useItemContext();


	useEffect(() => {
		axios.get("http://localhost:8080/items").then(response => {
			setContent(response.data)
		})
		console.log("fetching data")
	}, [context.item])


	if (!content) {
		return <div> no item</div>
	}

	return (
		<div className="flex flex-wrap first:w-[1200px] ">
			{content.map((item) => {
				return <ItemCard key={item.id} name={item.name} price={item.price} category={item.category} id={item.id}/>
			})}
		</div>
	)
}

export default ContentMain