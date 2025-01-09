"use client";

import { useContext } from "react";

import { CartContext } from "@/providers/CartProvider/CartProvider";
import { Card, CardContent, CardTitle } from "@ui/card";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { getFormattedPrice } from "@/lib/getFormattedPrice";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "@ui/button";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const cartItems = Object.entries(cart);

  const handleTrashClick = (id: string) => () => {
    removeFromCart(id);
  };

  const handleEmptyCart = () => {
    clearCart();
  };

  return (
    <>
      <Card className="w-full">
        <CardTitle className="text-3xl text-center p-6">Shopping Cart</CardTitle>

        <CardContent className="p-8">
          {cartItems.length ? (
            <ul>
              {cartItems.map(([id, cartItem]) => {
                const totalPrice = getFormattedPrice({ currency: "USD", price: cartItem.price * cartItem.quantity });

                return (
                  <li key={id} className="flex justify-between items-center">
                    <Link href={`${ROUTES.MENU}${cartItem.slug}`} className="hover:text-blue-500">
                      <section className="flex items-center pb-6">
                        <Image
                          src={cartItem.image}
                          alt={cartItem.name}
                          className="rounded-full max-h-24"
                          width={90}
                          height={90}
                          loading={"eager"}
                          priority={true}
                        />
                        <h3 className="p-6 text-xl">
                          {cartItem.name} ({cartItem.quantity})
                        </h3>
                      </section>
                    </Link>

                    <section className="flex items-center">
                      <h3 className="pr-6 text-xl">{totalPrice}</h3>
                      <TrashIcon className=" hover:text-red-500 transition-colors hover: cursor-pointer" onClick={handleTrashClick(id)} />
                    </section>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h3 className="text-center">Your cart is empty! Let&apos;s add some food!</h3>
          )}

          {cartItems.length ? (
            <Button
              className="mt-6 w-full justify-center flex bg-red-400 hover:border-red-400  hover:bg-transparent hover:text-red-400 "
              onClick={handleEmptyCart}
              size={"lg"}
            >
              Empty Cart
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};
