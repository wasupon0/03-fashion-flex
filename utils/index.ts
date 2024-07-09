import { CarProps, FilterProps } from "@/types";

import { getPlaiceholder } from "plaiceholder";

export async function fetchProducts(filters: FilterProps) {
  const { title, priceMin, priceMax, categoryId, limit } = filters;

  const url = `https://api.escuelajs.co/api/v1/products/?title=${title}&price_min=${priceMin}&price_max=${priceMax}&categoryId=${0}&offset=&limit=${100}`;

  console.log(url);
  //https://fakeapi.platzi.com/

  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);

  return results;
}

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log(base64);

    return base64;
  } catch (err) {
    console.log(err);
  }
}
