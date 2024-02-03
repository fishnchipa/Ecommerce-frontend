"use client"


import { BannerProps } from '@/lib/types'
import Image from "next/image";
import React, { useEffect, useState } from 'react'

const Banner = ({image}: {image: string}) => {

	return (
		<div 
			className="flex flex-col items-center px-[1rem] gap-x-[10rem] h-full w-full gap-y-[10rem] z-[-1]
			mt-[6rem]
			mobile:flex-row mobile:justify-between mobile:px-[20%]  mobile:mt-[0]
			
			">
			<div className="flex flex-col items-center ">
				<h1 className="text-2xl font-semibold">Discover Your New Ride!</h1>
				<p className="text-xs">Search through our ranges of different offers</p>
			</div>
			<div 
				className="relative w-[20%] box-border px-[30%] py-[20%]"
			>
				
				<Image src={image} fill alt="banner" />
			</div>
		</div>
	)
}

export default Banner