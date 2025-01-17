"use client";

import { CartContext } from "@/providers/CartProvider/CartProvider";
import { Button } from "@ui/button";
import { useContext } from "react";

import { cn } from "@/lib/cn";
import { Product } from "@/lib/getMenuItems";

interface CartAddButtonProps {
  item: Product;
  className?: string;
}

export const CartAddButton = ({ item, className }: CartAddButtonProps) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ item, quantity: 1 });
  };

  return (
    <Button onClick={handleClick} className={cn(className)}>
      Add to Cart
    </Button>
  );
};
