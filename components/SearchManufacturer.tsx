"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

import { manufacturers } from "@/constants";
import { SearchManuFacturerProps } from "@/types";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  return <div className="search-manufacturer"></div>;
};

export default SearchManufacturer;
