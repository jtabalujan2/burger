import { cn } from "@/lib/cn";
import { getFormattedPrice } from "@/lib/getFormattedPrice";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuItemDetailProps {
  image: string;
  name: string;
  price: number;
  description: string;
  calories: number;
  blurredImage: string;
}

export const MenuItemDetail = (props: MenuItemDetailProps) => {
  const { image, blurredImage, name, price, description, calories } = props;

  const formattedPrice = getFormattedPrice({ price, currency: "USD" });

  return (
    <>
      <Card className={cn("flex flex-col items-center w-full h-full p-6")}>
        <CardHeader className={cn("flex justify-start w-full")}>
          <Link href={"/"} className={cn("flex items-center cursor-pointer")}>
            <ArrowLeft className={cn("mr-4")} /> Go Back
          </Link>
        </CardHeader>
        <section className={cn("max-w-2xl")}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={200}
            blurDataURL={blurredImage}
            placeholder="blur"
            className={cn("rounded-md max-h-96 object-cover w-full")}
          />
          <CardTitle className={cn("text-4xl pt-4 text-center")}>{name}</CardTitle>
          <CardContent className={cn("px-0 py-6 w-full")}>
            <section className={cn("pb-6")}>
              <h4>{formattedPrice}</h4>
              <h4>{description}</h4>
            </section>
            <h4>Nutrition: {calories} calories</h4>
          </CardContent>
        </section>
      </Card>
    </>
  );
};
