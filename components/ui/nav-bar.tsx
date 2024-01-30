"use client"

import React, { useEffect, useRef, useState } from 'react'
import SearchBar from './search-bar'
import ProfileIcon from './profile-icon'
import QuickLinks from './quick-links'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Search } from 'lucide-react'
import CartIcon from './cart-icon'




const NavBar = () => {

	const a = [{page: "/home", content: "home"}, {page: "/about", content: "about"}, {page: "/socks", content: "socks"}]
	const [opacity, setOpacity] = useState(0);
	const divRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const nav = divRef.current;
		if (nav) {
			const navHeight = nav.clientHeight;
			const range = 100;
			const offset = navHeight / 2;
			
			const scrollPage = (e: Event) => {
				let calc = 1 - (window.scrollY - offset - range) / range
				if (calc > 0) {
					calc = 0;
				} else {
					calc = 1;
				}
				console.log(calc)
				
				setOpacity(calc);
			}
			window.addEventListener("scroll", scrollPage);

			return () => {
				window.removeEventListener("keydown", scrollPage);
			};
		}
	}, [])

	return (
		<>
			<div 
				className={`flex flex-row justify-center items-center w-screen
				fixed bg-red-500 transition duration-500 bg-opacity-${opacity}`} 
				ref={divRef}
			>
				<div className="flex flex-row w-[1200px] items-center justify-between ">
					<Link 
						href="/"
						className="text-5xl font-semibold tracking-tight pr-[4rem]"
					>
						Store
					</Link>
					<div className="flex flex-row gap-x-[5rem] mt-5">
						<div className="flex flex-col gap-y-1">
							<SearchBar />
							<QuickLinks value={a} />
						</div>
						<div className="h-[35px] flex flex-row gap-x-4 items-center">
							<CartIcon />
							<ProfileIcon />
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}

export default NavBar