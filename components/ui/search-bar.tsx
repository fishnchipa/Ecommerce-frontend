import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
	return (
		<>
		
			<input 
				className="h-fit p-2 rounded-md ring-offset-background 
				focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
				w-full border border-gray-500 mr-[5rem] ml-[3rem]"
				
			/>
			<Search className="absolute right-[15rem] invisible lg:visible"/>
		</>

		
		
		
		
	)
}

export default SearchBar