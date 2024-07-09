"use client";
import Image from "next/image";
import { Suspense, useRef, useState } from "react";

import { ProductProps } from "@/types";
import { ProductDetails } from ".";
import CustomButton from "./CustomButton";

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, description, images, category } = product;

  const [isOpen, setIsOpen] = useState(false);

  const blurDataURL = "/blur_product.png";

  const isImgValid = useRef(true);

  const urlRegex =
    /https:\/\/(?:i.imgur.com|placeimg.com|api.escuelajs.co)\/[a-zA-Z0-9/]+(?:\.jpeg|\.jpg|\.png)?/g;

  const imagesURLArray = images
    .map((item) => {
      const match = item.match(urlRegex);
      return match ? match[0] : null;
    })
    .filter((url) => url !== null);

  images.forEach((url) => {
    if (
      url.includes("placeimg") ||
      url.includes("example.com") ||
      url.includes("https://www.google.com/search?") ||
      url.includes("unsplash.com") ||
      url.includes("images.pexels") ||
      url === "" ||
      url === null ||
      url === undefined
    ) {
      isImgValid.current = false;
    } else {
      isImgValid.current = true;
    }
  });

  //console.log(isImgValid);
  //console.log(images);
  console.log(images[0]);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title} </h2>
        <span className="flex text-[22px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {price}
        </span>
      </div>

      <div className="relative w-full h-40 my-8 object-contain">
        {isImgValid.current ? (
          <Image
            src={imagesURLArray[0]}
            alt="product image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <Image
            src={category.image}
            alt="category image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        )}
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex justify-center items-center gap-2">
            {category.name.toLowerCase() === "clothes" ? (
              <Image
                src="/iconizer-clothes.svg"
                width={30}
                height={30}
                alt="clothes"
              />
            ) : null}
            {category.name.toLowerCase() === "electronics" ? (
              <Image
                src="/iconizer-electronics.svg"
                width={30}
                height={30}
                alt="electronics"
              />
            ) : null}
            {category.name.toLowerCase() === "furniture" ? (
              <Image
                src="/iconizer-furniture.svg"
                width={30}
                height={30}
                alt="furniture"
              />
            ) : null}
            {category.name.toLowerCase() === "shoes" ? (
              <Image
                src="/iconizer-shoes.svg"
                width={30}
                height={30}
                alt="shoes"
              />
            ) : null}

            {category.name.toLowerCase() === "miscellaneous" ? (
              <Image
                src="/iconizer-misc.svg"
                width={30}
                height={30}
                alt="miscellaneous"
              />
            ) : null}

            <p className="text-[14px] font-bold ">
              {category.name.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-purple"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <ProductDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
