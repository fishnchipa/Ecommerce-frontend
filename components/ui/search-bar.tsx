"use client"

import { Search } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const SearchBar = () => {
	const {
		register,
		handleSubmit,
		
	} = useForm()
	return (
		<form className=" w-[50rem] relative ">
			<input 
				className="w-full h-[35px] ring-offset-background focus-visible:outline-none 
				border-b-2 border-black focus-visible:border-sky-400 transition bg-transparent" 
				placeholder="Search by name, item, tag or description"
				{...register("search")}
				autoComplete="off"
			/>
			<button>
				<Search 
					size={25}
					className="absolute top-1 right-2"
				/>
			</button>
		</form>

		
		
		
		
	)
}

export default SearchBar