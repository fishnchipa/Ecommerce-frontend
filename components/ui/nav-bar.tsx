import React from 'react'
import SearchBar from './search-bar'
import CartIcon from './cart-icon'
import ProfileIcon from './profile-icon'
import QuickLinks from './quick-links'
import Link from 'next/link'

const NavBar = () => {

	const a = [{page: "/home", content: "home"}, {page: "/about", content: "about"}, {page: "/socks", content: "socks"}]

	return (
		<>
			<div className="w-full h-[4rem] flex flex-row items-center pt-1 ">
				<div className="flex flex-row items-center justify-end w-[10rem] ml-3">
					<Link href="/" className="text-3xl ">Store</Link>
				</div>
				<SearchBar />
				<div className="flex flex-row gap-x-5 mr-[5rem]">
					<CartIcon />
					<ProfileIcon />
				</div>
			</div>
			<QuickLinks value={a}/>
		</>
	)
}

export default NavBar