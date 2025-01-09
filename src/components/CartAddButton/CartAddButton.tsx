"use client";

import { CartContext } from "@/providers/CartProvider/CartProvider";
import { Button } from "@ui/button";
import { useContext } from "react";
import { Product } from "../MenuItemCardList/MenuItemCardList";

interface CartAddButtonProps {
  item: Product;
}

export const CartAddButton = ({ item }: CartAddButtonProps) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ item, quantity: 1 });
  };

  return <Button onClick={handleClick}>Add to Cart</Button>;
};
