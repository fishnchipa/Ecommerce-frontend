"use client"

import { ItemType } from '@/lib/types';
import axios from 'axios';
import { DefaultSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react'
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
      <div>
        This cart is empty
      </div>
    )
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Price</h1>
      </div>
      <form className="flex flex-col gap-y-5 ">
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
        <div className="flex flex-row justify-center">
          <button className="w-fit" onClick={(e) => onClick(e)}>Click Me</button>
        </div>
      </form>
    </div>
  )
}

export default CartItems