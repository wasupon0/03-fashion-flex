import { FilterProps, ProductProps } from "@/types";

export async function fetchProducts(filters: FilterProps) {
  const { title, priceMin, priceMax, categoryId, limit } = filters;

  const url = `https://api.escuelajs.co/api/v1/products/?title=${title}&price_min=${priceMin}&price_max=${priceMax}&categoryId=${categoryId}&offset=&limit=${limit}`;

  console.log(url);
  //https://fakeapi.platzi.com/

  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);

  return results;
}

export const updateSearchParams = (name: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(name, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
