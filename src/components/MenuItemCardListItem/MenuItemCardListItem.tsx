import { getFormattedPrice } from "@/lib/getFormattedPrice";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/card";
import Image from "next/image";

export interface MenuItemCardListItemProps {
  imageUrl?: string;
  title: string;
  description: string;
  price: number;
  imageHeight?: number;
  imageWidth?: number;
}

export const MenuItemCardListItem = (props: MenuItemCardListItemProps) => {
  const { imageUrl, title, description, price, imageHeight = 300, imageWidth = 200 } = props;

  const formattedPrice = getFormattedPrice({ price, currency: "USD" });

  return (
    <Card className="max-w-60 p-0 rounded-md h-full">
      {imageUrl ? (
        <Image src={imageUrl} alt={title} className="w-72 h-60 object-cover rounded-t-md" width={imageWidth} height={imageHeight} />
      ) : null}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{formattedPrice}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};
