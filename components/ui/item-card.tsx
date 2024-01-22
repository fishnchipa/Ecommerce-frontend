import React from 'react'
import AddToCart from './add-to-cart'


const ItemCard = () => {
	return (
		<div className="flex flex-col justify-between w-[250px] border-gray-300 border-[1px] p-2">
			<div className="w-full">
				<img src="/acid.jpeg" alt="item" className="object-fit h-[200px] w-full"/>
			</div>
			<div>
				<h1>Vintage Album</h1>
				<h2>$99</h2>
			</div>
			<div className="flex flex-row justify-end">
				<AddToCart />
			</div>


		</div>
	)
}

export default ItemCard