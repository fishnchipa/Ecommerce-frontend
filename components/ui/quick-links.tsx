import { QuickLinksProps } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

const QuickLinks = ({value}: QuickLinksProps) => {
	return (

			<div className="flex flex-row h-fit w-fit gap-x-4 pb-2">
				{value.map((items) => {
					return (
						<Link key={items.content} href={items.page} className="font-semibold">{items.content}</Link>
					)
	
				})}

			</div>


		
	)
}

export default QuickLinks