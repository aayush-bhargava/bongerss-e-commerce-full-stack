"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { BsCartCheckFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useCart } from "@/app/context/CartContext";
import { MdAccountCircle } from "react-icons/md";


const Navbar = () => {
  const cartRef = useRef<HTMLDivElement | null>(null);
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();

  const toggleCart = () => {
    cartRef.current?.classList.toggle("translate-x-full");
  };

  const items = Object.values(cart);
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <div className="flex items-center px-8 py-4 bg-[#0b1220] text-white">
        <Link href="/"><img src="/logo.png" width={120} /></Link>

        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-semibold">
            <Link href="/tshirts"><li>Tshirts</li></Link>
            <Link href="/hoodies"><li>Hoodies</li></Link>
            <Link href="/mugs"><li>Mugs</li></Link>
            <Link href="/covers"><li>Covers</li></Link>
          </ul>
        </div>

        <Link href = "/login"><MdAccountCircle className = 'text-3xl cursor-pointer mx-2'/></Link>

        <div onClick={toggleCart} className="flex items-center gap-3">
          <BsCartCheckFill className="text-3xl" />
          {cartCount > 0 && (
            <span className="absolute -top-0 mx-5 my-2 bg-pink-500 w-5 h-5 rounded-full text-xs flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      <div
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-80 bg-[#374151] text-white p-6 translate-x-full transition-transform z-50"
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-xl">Shopping Cart</h2>
          <RxCross2 onClick={toggleCart} className="cursor-pointer text-2xl" />
        </div>

        {items.length === 0 && <p>Your cart is empty</p>}

        {items.map((item) => (
          <div key={item.slug} className="flex gap-4 mb-4">
            <img src={item.image} className="w-14 h-14 rounded" />
            <div className="flex-1">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiCircleMinus onClick={() => decreaseQty(item.slug)} />
              <span>{item.quantity}</span>
              <CiCirclePlus onClick={() => increaseQty(item.slug)} />
            </div>
          </div>
        ))}

        {items.length > 0 && (
          <>
            <p className="mt-6 font-semibold">Subtotal: ₹{subtotal}</p>
            <div className="flex gap-4 mt-4">
              <Link href = "/checkout"><button className="bg-pink-500 px-8 py-2 rounded">Checkout</button></Link>
              <button onClick={clearCart} className="border px-4 py-2 rounded">
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;