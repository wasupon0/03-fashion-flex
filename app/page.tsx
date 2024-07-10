import {
  CustomFilter,
  Hero,
  ProductCard,
  SearchBar,
  ShowMore,
} from "@/components";
import CustomSlider from "@/components/CustomSlider";
import { categories } from "@/constants";
import { HomeProps, ProductProps } from "@/types";
import { fetchProducts } from "@/utils";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";

export default async function Home({ searchParams }: HomeProps) {
  let isReady = false;

  const allProducts = await fetchProducts({
    title: searchParams.title || "",
    price_min: Number(searchParams.price_min) || 10,
    price_max: Number(searchParams.price_max) || 300,
    categoryId: searchParams.categoryId || 0,
    limit: Number(searchParams.limit) || 10,
  });

  if (searchParams.limit === undefined) {
    isReady = (await allProducts.length) === 10;
  } else {
    isReady = (await allProducts.length) >= Number(searchParams.limit) - 10;
  }

  console.log(`isReady: ${isReady}`);
  //console.log(allProducts);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Shopping Catalogue</h1>
          <p>Discover must-have items just for you</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <CustomSlider min_name="price_min" max_name="price_max" />

          <div className="home__filter-container">
            <CustomFilter name="categoryId" options={categories} />
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
              <Suspense fallback={<BeatLoader color="#A02BFF" />}>
                {allProducts?.map((product: ProductProps) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Suspense>
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

            <ShowMore
              pageNumber={(Number(searchParams.limit) || 10) / 10}
              isNext={(Number(searchParams.limit) || 10) <= allProducts.length}
              isReady={isReady}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    </main>
  );
}
