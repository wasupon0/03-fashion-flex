import { CarProps, FilterProps } from "@/types";

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
