"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 active:outline-violet-300 active:outline active:rounded-full ${otherClasses}`}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTitle === "") {
      return alert("Please type in a search term");
    }
    updateSearchParams(searchTitle.toLowerCase());
  };

  const updateSearchParams = (title: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (title) {
      searchParams.set("title", title);
    } else {
      searchParams.delete("title");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  const clearInput = () => {
    setSearchTitle("");
    updateSearchParams("");
  };

  return (
    <form className="searchbar" id="search_position" onSubmit={handleSearch}>
      <div className="searchbar__item">
        {searchTitle ? (
          <Image
            src="/close.svg"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4 border p-1 border-gray-300 rounded-full cursor-pointer"
            alt="clear input"
            onClick={clearInput}
          />
        ) : (
          <Image
            src="/shop-logo.svg"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4 "
            alt="filter items"
          />
        )}
        <input
          type="text"
          name="title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="filter product title"
          className="searchbar__input focus:bg-purple-50"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
