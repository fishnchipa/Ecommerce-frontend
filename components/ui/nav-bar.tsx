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

	// useEffect(() => {
	// 	const nav = divRef.current;
	// 	if (nav) {
	// 		const navHeight = nav.clientHeight;
	// 		const range = 100;
	// 		const offset = navHeight / 2;
			
	// 		const scrollPage = (e: Event) => {
	// 			let calc = 1 - (window.scrollY - offset - range) / range
	// 			if (calc > 0) {
	// 				calc = 0;
	// 			} else {
	// 				calc = 1;
	// 			}
	// 			console.log(calc)
				
	// 			setOpacity(calc);
	// 		}
	// 		window.addEventListener("scroll", scrollPage);

	// 		return () => {
	// 			window.removeEventListener("keydown", scrollPage);
	// 		};
	// 	}
	// }, [])

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const res = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener("resize", res);

		return () => {
			window.removeEventListener("resize", res);
		}
	}, [])

	return (
		<>
			<div 
				className={`flex flex-row justify-center items-center w-screen
				fixed transition bg-red-500 duration-500 bg-opacity-${opacity}`} 
				ref={divRef}
			>
				<div className="flex flex-row  second:w-[1200px] w-full items-center justify-between px-5 ">
					<Link 
						href="/"
						className="text-5xl font-semibold tracking-tight mr-[6rem]"
					>
						Store
					</Link>
					<div className="flex flex-row gap-x-[3rem] mt-5 w-full ">
						<div className="flex flex-col gap-y-1 w-full ">
							<SearchBar />
							<QuickLinks value={a} />
						</div>
						<div className="h-[35px] flex flex-row gap-x-4 items-center  ">
							<CartIcon />
							<ProfileIcon />
						</div>
					</div>
					
				</div>
			</div>
			<div className="absolute">
				{width}
			</div>
			
		</>
	)
}

export default NavBar