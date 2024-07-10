import { FilterProps, ProductProps } from "@/types";

export async function fetchProducts(filters: FilterProps) {
  const { title, price_min, price_max, categoryId, limit } = filters;

  const url = `https://api.escuelajs.co/api/v1/products/?title=${title}&price_min=${price_min}&price_max=${price_max}&categoryId=${categoryId}&offset=&limit=${limit}`;

  console.log(url);
  //https://fakeapi.platzi.com/
  //https://api.escuelajs.co/api/v1/products/?title=&price_min=1&price_max=10000&categoryId=0&offset=&limit=10

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

export const updateSearchParamsTwo = (
  name1: string,
  value1: string,
  name2: string,
  value2: string
) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(name1, value1);
  searchParams.set(name2, value2);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
