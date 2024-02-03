"use client"

import { ItemType } from '@/lib/types'
import axios from 'axios'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

type searchType = {
	search: string
}



const SearchBar = () => {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		
	} = useForm<searchType>()

	const submit = (data: searchType) => {
		
		axios.get(`http://localhost:8080/items/${data.search}`).then(response => {
			const data = response.data as ItemType[];
			if (data.length == 0) {
				router.push(`/no-item-found`)
			} else if (data.length == 1) {

				router.push(`/${data[0].name}?id=${data[0].id}&category=${data[0].category}&price=${data[0].price}`)
				
			} else {

				router.push(`/search`)
			}
		})

		

	}

	return (
		<form className="first:w-[50rem] relative w-full" onSubmit={handleSubmit(submit)}>
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
					className="absolute top-1 right-2 "
				/>
			</button>
		</form>
		
	)
}

export default SearchBar