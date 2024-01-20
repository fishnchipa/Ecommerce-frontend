import React from 'react'

function page({ params }: { params: { itemId: string }}) {
	return (
		<div>{params.itemId}</div>
	)
}

export default page