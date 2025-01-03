import { ItemCard } from "@/components/ItemCard/ItemCard";

const items = {
  products: [
    {
      id: "1",
      name: "Burger A",
      price: 499,
      image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6",
      description: "A classic beef patty topped with lettuce, tomato, and our special sauce, served in a sesame seed bun.",
      calorie: 760,
      slug: "burger-a",
    },
    {
      id: "2",
      name: "Black Burger",
      price: 599,
      image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99",
      description: "Featuring a unique black bun, this burger comes with a juicy Angus beef patty, melted cheddar, and caramelized onions.",
      calorie: 640,
      slug: "black-burger",
    },
    {
      id: "3",
      name: "Fries with Ketchup",
      price: 699,
      image: "https://images.unsplash.com/photo-1550259114-ad7188f0a967",
      description: "Crispy golden fries served with a side of our signature tangy ketchup.",
      calorie: 920,
      slug: "fries",
    },
    {
      id: "4",
      name: "Bacon & Egg",
      price: 799,
      image: "https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6",
      description: "A hearty burger featuring a fried egg, crispy bacon, and melted cheese, all on a toasted brioche bun.",
      calorie: 920,
      slug: "bacon-egg",
    },
    {
      id: "5",
      name: "Mushroom",
      price: 799,
      image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040",
      description: "Loaded with sautéed mushrooms and Swiss cheese, this burger is a mushroom lover's delight.",
      calorie: 820,
      slug: "mushroom-burger",
    },
    {
      id: "6",
      name: "Chicken Sandwich",
      price: 799,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      description: "A juicy grilled chicken breast topped with lettuce, tomato, and mayo, served on a whole wheat bun.",
      calorie: 1020,
      slug: "chicken-burger",
    },
  ],
};

export default function Home() {
  return (
    <div className="grid grid-cols-4">
      {items.products.map((item) => (
        <span className="p-6" key={item.slug}>
          <ItemCard imageUrl={item.image} title={item.name} description={item.description} price={item.price} />
        </span>
      ))}
    </div>
  );
}
