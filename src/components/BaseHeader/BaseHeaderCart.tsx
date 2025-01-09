"use client";

import { CartContext } from "@/providers/CartProvider/CartProvider";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";

export const BaseHeaderCart = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="relative">
      <ShoppingCartIcon data-testid="shopping-cart-icon" className="hover" />
      <span className="absolute bg-gray-500 rounded-full w-4 left-4 text-center text-white text-xs">{quantity > 0 ? quantity : null}</span>
    </div>
  );
};
