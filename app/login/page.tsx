

import React, { useEffect, useState } from 'react'

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import LoginCard from '@/components/login-card';

const page = async () => {
	const session = await getServerSession()

	
	if (session) {
		redirect("/");
	}
	

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<LoginCard />

		</div>
	)
}

export default page;