
import { BannerProps } from '@/lib/types'
import React from 'react'

const Banner = ({width, height, image}: BannerProps) => {


	return (
		<div className="rounded-md overflow-hidden hidden lg:block">
			<img src={image} width={width} height={height} alt="banner" />
		</div>
	)
}

export default Banner