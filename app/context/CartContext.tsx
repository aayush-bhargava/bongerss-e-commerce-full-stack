"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: Record<string, CartItem>;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQty: (slug: string) => void;
  decreaseQty: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  // Load cart on refresh
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync across tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === "cart" && e.newValue) {
        setCart(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => ({
      ...prev,
      [item.slug]: {
        ...item,
        quantity: (prev[item.slug]?.quantity || 0) + 1,
      },
    }));
  };

  const increaseQty = (slug: string) => {
    setCart((prev) => ({
      ...prev,
      [slug]: {
        ...prev[slug],
        quantity: prev[slug].quantity + 1,
      },
    }));
  };

  const decreaseQty = (slug: string) => {
    setCart((prev) => {
      const item = prev[slug];
      if (!item) return prev;

      if (item.quantity === 1) {
        const updated = { ...prev };
        delete updated[slug];
        return updated;
      }

      return {
        ...prev,
        [slug]: { ...item, quantity: item.quantity - 1 },
      };
    });
  };

  const clearCart = () => setCart({});

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
