import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/card";
import Image from "next/image";

interface ItemCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  price: number;
}

export const ItemCard = (props: ItemCardProps) => {
  const { imageUrl, title, description, price } = props;

  return (
    <Card className="max-w-60 p-0 rounded-md h-full">
      {imageUrl ? <Image src={imageUrl} alt={title} className="w-72 h-60 object-cover rounded-t-md" width={200} height={300} /> : null}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};
