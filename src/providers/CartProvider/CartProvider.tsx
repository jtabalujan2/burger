"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { produce } from "immer";
import { Product } from "@/lib/getMenuItems";

export interface CartStateValue extends Product {
  quantity: number;
}

export interface CartState {
  [id: string]: CartStateValue;
}

interface AddToCartPayload {
  item: Product;
  quantity: number;
}

export interface CartContextProps {
  cart: CartState;
  quantity: number;
  addToCart: (payload: AddToCartPayload) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
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

  return null;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartState>({});

  useEffect(() => {
    const existingCart = getExistingCart();

    if (existingCart) {
      setCart(existingCart);
    }
  }, []);

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

  const clearCart = () => {
    setCart({});
    localStorage.removeItem("cart");
  };

  const quantity = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, quantity }}>{children}</CartContext.Provider>;
};
