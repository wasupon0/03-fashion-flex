"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    document.querySelector("#discover")?.scrollIntoView();
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Style, Quality, Convenience—All in One Place
        </h1>

        <p className="hero__subtitle">
          Explore a curated selection of fashion, electronics, furniture, shoes,
          and more.
        </p>

        <CustomButton
          title="Go Shopping"
          containerStyles="bg-primary-purple text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            unoptimized={true}
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
