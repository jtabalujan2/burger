"use client";

import { createContext, useState, ReactNode } from "react";
import { produce } from "immer";
import { Product } from "@/components/MenuItemCardList/MenuItemCardList";

export interface CartStateValue extends Product {
  quantity: number;
}

interface CartState {
  [id: string]: CartStateValue;
}

interface AddToCartPayload {
  item: Product;
  quantity: number;
}

interface CartContextProps {
  cart: CartState;
  quantity: number;
  addToCart: (payload: AddToCartPayload) => void;
  removeFromCart?: (id: string) => void;
  clearCart?: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: {},
  quantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

const getExistingCart = () => {
  const existingCart = localStorage.getItem("cart");

  if (existingCart) {
    return JSON.parse(existingCart);
  }

  return {};
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const exisitingCart = getExistingCart();
  const [cart, setCart] = useState<CartState>(exisitingCart);

  const addToCart = ({ item }: AddToCartPayload) => {
    setCart(
      produce((drafCart) => {
        if (drafCart[item?.id]) {
          drafCart[item.id].quantity += 1;
        } else {
          drafCart[item.id] = { ...item, quantity: 1 };
        }

        localStorage.setItem("cart", JSON.stringify(drafCart));
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCart(
      produce((drafCart) => {
        delete drafCart[id];

        localStorage.setItem("cart", JSON.stringify(drafCart));
      })
    );
  };

  const quantity = Object.values(cart).length;

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantity }}>{children}</CartContext.Provider>;
};
