"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { CarProps } from "@/types";
import { CarDetails } from ".";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  //const { city_mpg, year, make, model, transmission, drive } = car;
  const { id, title, price, description, images, category } = car;

  const [isOpen, setIsOpen] = useState(false);

  // const [isImgValid, setIsImgValid] = useState(true);

  const isImgValid = useRef(true);

  // const urlRegex =
  //   /https:\/\/(?:i.imgur.com|placeimg.com)\/[a-zA-Z0-9/]+(?:\.jpeg|\.jpg)?/g;

  // const imagesURLArray = images
  //   .map((item) => {
  //     const match = item.match(urlRegex);
  //     return match ? match[0] : null;
  //   })
  //   .filter((url) => url !== null);

  images.forEach((url) => {
    if (url.includes("placeimg")) {
      isImgValid.current = false;
    } else {
      isImgValid.current = true;
    }
  });

  console.log(isImgValid);
  console.log(images[0]);
  //console.log(imagesURLArray[0]);

  return (
    <div key={id} className="car-card group">
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
            src={images[0]}
            alt="product image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain "
          />
        ) : (
          <Image
            src={category.image}
            alt="category image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain"
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
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
