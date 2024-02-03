"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios';
import { DefaultSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react'
import CartItem from './cart-items';
import { useForm } from 'react-hook-form';
import { useCartContext } from '@/app/context/cart-context';
import { deleteCart } from '@/app/api/db/database';

interface User extends DefaultSession {
  id: string
}


const CartItems = () => {
  const { data: session } = useSession()
  const items = useRef<ItemType[]>([]);
  const { cartItems } = useCartContext();
  let total = 0;

  useEffect(() => {
    if (session) {
      const user = session.user as User;

      axios.post("http://localhost:8080/cart", {
        id: user.id
      })
      .then(response => {
        items.current = response.data
      })

    }
  })


  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const uniqueCart = cartItems.filter((value, index, array) => {
      return index === array.findIndex((item) => item.itemId === value.itemId)
    })

    if (session) {
      const user = session.user as User;
      const response = deleteCart(user.id)
      console.log(response);
    }

    console.log(uniqueCart);
  
  }

  if (!items.current.length) {
    return (
      <div className="pt-[100px]">
        This cart is empty
      </div>
    )
  }

  items.current.forEach(item => {total = total + parseInt(item.price)})

  return (
    <div className="flex pt-[150px] h-screen">
      <div className="px-5 w-full overflow-scroll overflow-x-hidden mb-[80px]">
        <div className="flex flex-row justify-between">
          <h1>Product</h1>
          <h1>Quantity</h1>
          <h1>Price</h1>
        </div>
        <form className="flex flex-col gap-y-5">
          {items.current.map(product => {
            return (
              <CartItem 
                key={product.id} 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                category={product.category} 
              />	
            )
          })}
        </form>
      </div>
      <div className="w-[500px] relative">
        <div 
          className=" h-[500px] rounded-md border-[1px] border-gray-300 absolute right-[20px] left-[20px]
          flex flex-col items-center py-5 justify-between"
        >
          <h1>Total: ({items.current.length} Items): {total}</h1>
          <button 
          className="bg-slate-900 rounded-3xl py-2 px-4 text-white text-sm hover:bg-slate-700" 
          onClick={(e) => onClick(e)}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems