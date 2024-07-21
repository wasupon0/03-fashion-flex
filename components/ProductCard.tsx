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
      url.includes("google.com") ||
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

  const substrings = [
    "placeimg",
    "example",
    "google",
    "images.pexels",
    "mountain",
  ];

  function categoryImage() {
    return substrings.some((substring) =>
      product.category.image.includes(substring)
    )
      ? "/image-not-available.png"
      : product.category.image;
  }

  console.log(images[0]);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title}</h2>
        <span className="flex text-[22px] font-extrabold">
          <span className="text-xs font-semibold">$</span>
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
            src={categoryImage()}
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
            {category.id.toString() === "1" ? ( //Clothes
              <Image
                src="/iconizer-clothes.svg"
                width={30}
                height={30}
                alt="clothes"
              />
            ) : null}
            {category.id.toString() === "2" ? ( //Electronics
              <Image
                src="/iconizer-electronics.svg"
                width={30}
                height={30}
                alt="electronics"
              />
            ) : null}
            {category.id.toString() === "3" ? ( //Furniture
              <Image
                src="/iconizer-furniture.svg"
                width={30}
                height={30}
                alt="furniture"
              />
            ) : null}
            {category.id.toString() === "4" ? ( //Shoes
              <Image
                src="/iconizer-shoes.svg"
                width={30}
                height={30}
                alt="shoes"
              />
            ) : null}

            {category.id.toString() === "5" ? ( //Miscellaneous
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
            containerStyles="w-full py-[16px] rounded-full bg-primary-purple "
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
