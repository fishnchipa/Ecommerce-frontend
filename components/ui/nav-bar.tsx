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
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);

  const opacityVariable = {
    0 : "bg-opacity-0",
    1 : "bg-opacity-1",
  }


  useEffect(() => {
    const nav = divRef.current;
    if (nav) {
      const navHeight = nav.clientHeight;
      const range = 50;
      const offset = navHeight / 2;


      const res = () => {
        if (window.innerWidth < 716) {
          setSmall(true);
        } else {
          setSmall(false)
        }
      }

      const scrollPage = (e: Event) => {
        let calc = 1 - (window.scrollY - offset - range) / range;

        (calc > 0) ? calc = 0 : calc; 
        
        setOpacity(calc);
      }

      window.addEventListener("scroll", scrollPage);
      window.addEventListener("resize", res);

      return () => {
        window.removeEventListener("keydown", scrollPage);
        window.removeEventListener("resize", res);
      };
    }
  }, [])

  
  const showDialogue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((prev) => !prev)
    console.log(open)
  }


  return (
    <>
      {(small) ? (
        <div>
          <div 
            className={`flex flex-row justify-center items-center w-screen pt-5 pb-[20px] 
            fixed transition bg-white duration-500 ${opacityVariable[opacity as keyof typeof opacityVariable]}`} 
            ref={divRef}
          >	
            <div className="flex flex-row second:w-[1200px] w-full items-center justify-between px-5 ">
              <div>
                <button onClick={(e) => {showDialogue(e)}}>
                  <Search />
                </button>

                <div 
                  className={`fixed left-0 top-[70px] bottom-0
                bg-white mt-5  ${open ? "right-full delay-100 overflow-hidden" : "right-0 delay-0"} 
                  transition-all duration-300 ease-in-out`}
                    >
                  <form className="flex flex-col p-5 gap-y-5">
                    <input 
                      className="w-full ring-offset-background focus-visible:outline-none 
				              border-b-2 border-black focus-visible:border-sky-400 transition bg-transparent"   
                      placeholder="Search Item" 
                    />
                    <button 
                      className="w-full rounded-md border-[1px] border-black text-white bg-slate-900
                      hover:bg-slate-700"
                    >
                      Enter
                    </button>

                  </form>
                </div>

            
                
              </div>
              <Link 
                href="/"
                className="text-5xl font-semibold tracking-tight"
              >
                Store
              </Link>
              <div className="h-[35px] flex flex-row gap-x-4 items-center mb-[16px]">
                <CartIcon />
                <ProfileIcon />
              </div>
            </div>		
          </div>
        </div>
      
      
      ) : (
      <div>
        <div 
          className={`flex flex-row justify-center items-center w-screen
          fixed transition bg-white duration-500 ${opacityVariable[opacity as keyof typeof opacityVariable]}`} 
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
      </div>
      )}
    </>
  )
}

export default NavBar