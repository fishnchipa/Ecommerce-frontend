
import { BannerProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const Banner = ({width, height, image}: BannerProps) => {


	return (
		<div className="rounded-md overflow-hidden hidden lg:block">
			<Image src={image}  alt="banner" width={900} height={400}/>
		</div>
	)
}

export default Banner