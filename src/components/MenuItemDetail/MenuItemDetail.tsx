import { cn } from "@/lib/cn";
import { getBlurImage } from "@/lib/getBlurImage";
import { getFormattedPrice } from "@/lib/getFormattedPrice";
import { Card, CardContent, CardTitle } from "@ui/card";
import Image from "next/image";

interface MenuItemDetailProps {
  image: string;
  name: string;
  price: number;
  description: string;
  calories: number;
}

export const MenuItemDetail = async (props: MenuItemDetailProps) => {
  const { image, name, price, description, calories } = props;

  const formattedPrice = getFormattedPrice({ price, currency: "USD" });
  const { base64 } = await getBlurImage(image);

  return (
    <>
      <Card className={cn("flex flex-col items-center w-full h-full p-6")}>
        <section className={cn("max-w-2xl")}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={200}
            blurDataURL={base64}
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
