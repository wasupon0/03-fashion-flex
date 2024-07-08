// "use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { categories, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchProducts } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import { CarProps } from "@/types";

interface CarCardProps {
  car: CarProps;
}

export default async function Home() {
  // const [allProducts, setAllProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [categoryId, setCategoryId] = useState(0);
  // const [title, setTitle] = useState("");

  // const [priceMin, setPriceMin] = useState(1);
  // const [priceMax, setPriceMax] = useState(10000);
  // const [limit, setLimit] = useState(10);

  // const getProducts = async () => {
  //   setLoading(true);

  //   try {
  //     const result = await fetchProducts({
  //       title: title || "",
  //       priceMin: priceMin || 1,
  //       priceMax: priceMax || 10000,
  //       categoryId: categoryId || 0,
  //       limit: limit || 10,
  //     });
  //     console.log(result);
  //     setAllProducts(result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log(categoryId, title, priceMin, priceMax, limit);
  //   getProducts();
  // }, [categoryId, title, priceMin, priceMax, limit]);

  const allProducts = await fetchProducts({
    title: "",
    priceMin: 1,
    priceMax: 10000,
    categoryId: 0,
    limit: 10,
  });

  console.log(allProducts);

  const isDataEmpty =
    !Array.isArray(allProducts) || allProducts.length < 1 || !allProducts;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Shopping Catalogue</h1>
          <p>Discover must-have items just for you</p>
        </div>

        <div className="home__filters">
          {/* <SearchBar setTitle={setTitle} /> */}

          {/* <SearchBar /> */}

          <div className="home__filter-container">
            {/* <CustomFilter
              title="category"
              options={categories}
              setFilter={() => {}}
            /> */}
            {/* <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setPriceMax}
            />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setPriceMax}
            /> */}
          </div>
        </div>

        {allProducts.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allProducts?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )} */}

            {/* <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allProducts.length}
              setLimit={setLimit}
            /> */}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
