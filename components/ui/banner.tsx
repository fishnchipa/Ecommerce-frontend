"use client"


import { BannerProps } from '@/lib/types'
import Image from "next/image";
import React, { useEffect, useState } from 'react'

const Banner = ({image}: {image: string}) => {

	return (
		<div className="flex flex-row justify-between items-center bg-red-500 p-[10rem] gap-x-[10rem] h-full w-full">
			<div className="flex flex-col items-center ">
				<h1 className="text-2xl font-semibold">Discover Your New Ride!</h1>
				<p className="text-xs">Search through our ranges of different offers</p>
			</div>
			<div className="relative h-[100px] w-[100px]">
				
				<Image src={image} alt="banner" fill={true}/>
			</div>
		</div>
	)
}

export default Banner