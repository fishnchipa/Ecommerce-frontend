"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ItemCard from './ui/item-card';

const ContentMain = () => {

	const [content, setContent] = useState<Array<ItemType> | null>(null)
	useEffect(() => {
		axios.get("http://localhost:8080/items").then(response => {
			setContent(response.data)
		})
	}, [])



	return (
		<div className="flex flex-row w-full">
			{content?.map((item) => {
				return <ItemCard key={item.id} name={item.name} price={item.price} category={item.category} id={item.id}/>
			})}

		</div>
	)
}

export default ContentMain