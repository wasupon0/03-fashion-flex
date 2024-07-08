"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setTitle: setTitle }: SearchBarProps) => {
  const [searchTitle, setSearchTitle] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTitle === "") {
      return alert("Please provide some input");
    }

    setTitle(searchTitle);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Image
          src="/shop-logo.svg"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="filter items"
        />
        <input
          type="text"
          name="model"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="filter product title"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
