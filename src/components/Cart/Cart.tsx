"use client";

import { useContext } from "react";

import { CartContext } from "@/providers/CartProvider/CartProvider";
import { Card, CardContent, CardTitle } from "@ui/card";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { getFormattedPrice } from "@/lib/getFormattedPrice";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartItems = Object.entries(cart);

  return (
    <>
      <Card className="w-full">
        <CardTitle>Shopping Cart</CardTitle>
        <CardContent>
          <ul>
            {cartItems.map(([id, cartItem]) => {
              console.dir(cartItem);
              const totalPrice = getFormattedPrice({ currency: "USD", price: cartItem.price * cartItem.quantity });

              return (
                <li key={id}>
                  <Link href={`${ROUTES.MENU}${cartItem.slug}`} className="flex justify-between items-center">
                    <section className="flex items-center">
                      <Image src={cartItem.image} alt={cartItem.name} className="rounded-full max-h-12" width={50} height={50} />
                      <h3 className="p-6">
                        {cartItem.name} ({cartItem.quantity})
                      </h3>
                    </section>

                    <section className="flex items-center">
                      <p className="pr-6">{totalPrice}</p>
                      <TrashIcon />
                    </section>
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
