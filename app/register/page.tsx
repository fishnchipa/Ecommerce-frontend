import React from 'react'

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import RegisterCard from '@/components/register-card';

const page = async () => {
	const session = await getServerSession()

	if (session) {
		redirect("/");
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<RegisterCard />

		</div>
	)
}

export default page;