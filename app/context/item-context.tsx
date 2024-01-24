

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


type ItemContextProviderProps = {
	children: ReactNode
}


type ItemContext = {
	item: number
	setItem: Dispatch<SetStateAction<number>>
}

export const ItemContext = createContext<ItemContext | null>(null);

export default function ItemContextProvider({ children }: ItemContextProviderProps  ) {
	const [item, setItem] = useState(1)

	return (
		<ItemContext.Provider
			value={{
				item,
				setItem
			}}
		
		>
			{children}

		</ItemContext.Provider>
	)
}

export function useItemContext() {
	const context = useContext(ItemContext);
	

	if (!context) {
		throw new Error(
			"useItemContext must be used within ItemContextProvider"
		);
	}

	return context;
}