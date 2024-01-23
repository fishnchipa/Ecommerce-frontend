import React from 'react'
import AddToCart from './add-to-cart'
import { ItemType } from '@/lib/types'


const ItemCard = ({id, name, price, category}: ItemType) => {
	
	return (
		<div className="flex flex-col justify-between w-[250px] border-gray-300 border-[1px] p-2">
			<div className="w-full">
				<img src="/acid.jpeg" alt="item" className="object-fit h-[200px] w-full"/>
			</div>
			<div>
				<h1>{name}</h1>
				<h2>${price}</h2>
				<h3>{id}</h3>
			</div>
			<div className="flex flex-row justify-end">
				<AddToCart itemId={id}/>
			</div>


		</div>
	)
}

export default ItemCard