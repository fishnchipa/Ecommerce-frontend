import React, { HTMLAttributes } from 'react'
import { ShoppingCart } from 'lucide-react';

const CartIcon = () => {
	return (
		<>
			<button className="h-fit">
				<ShoppingCart />
			</button>
		</>
	)
}

export default CartIcon