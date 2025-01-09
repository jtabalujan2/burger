export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
  slug: string;
}

interface ItemsResponse {
  products: Product[];
}

export const getMenuItems = async (): Promise<ItemsResponse> => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/data/products.json`, { cache: "force-cache" });
    const data = await response.json();

    return data;
  } catch (error) {
    // Some kiind of logging
    console.error("Problem fetching menu items", error);
    return { products: [] };
  }
};
