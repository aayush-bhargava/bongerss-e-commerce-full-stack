"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/app/context/CartContext";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";


export default function checkout(): JSX.Element {
  const { cart, increaseQty, decreaseQty } = useCart();
  const items = Object.values(cart);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-10">
      <Navbar />

      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>

      <h2 className="font-bold text-lg mb-6">1. Delivery Details</h2>
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div className="col-span-2">
          <label className="text-sm text-gray-600">Address</label>
          <textarea rows={4} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Phone</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-gray-600">City</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-gray-600">State</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Pincode</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <h2 className="font-semibold text-lg mb-4">2. Review Cart Items & Pay</h2>
      <div className = "bg-slate-200">

      {items.length === 0 && (
        <p className="text-gray-500 mb-10">Your cart is empty.</p>
      )}

      {items.map((item) => (
        <div
          key={item.slug}
          className="flex items-center justify-between border-b py-4"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQty(item.slug)}
              className="px-3 py-1 border rounded"
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.slug)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          <p className="font-semibold">
            ₹{item.price * item.quantity}
          </p>
        </div>
      ))}

      {items.length > 0 && (
        <div className="flex justify-end mt-6">
          <p className="text-xl font-bold">Subtotal: ₹{subtotal}</p>
        </div>
      )}
      </div>

      <div>
        <Link href = "/order"><button className = "flex text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
          <IoBagCheckOutline className = "m-1" /> Pay ₹{subtotal}</button>
           </Link>
      </div>

      <Footer />
    </div>
  );
}
