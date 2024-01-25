import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


type CartContextProviderProps = {
	children: React.ReactNode
}

type CartItems = {itemId: number, quantity: number}

type CartContext = {
	cartItems: CartItems[],
	setCartItem: Dispatch<SetStateAction<CartItems[]>>

}

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItem] = useState<CartItems[]>([]);


	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItem
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useCartContext() {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error(
			"useCartContext must be used within CartContextProvider"
		);
	}

	return context;
}