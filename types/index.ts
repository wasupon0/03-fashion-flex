import { MouseEventHandler } from "react";

export interface CarProps {
  // city_mpg: number;
  // class: string;
  // combination_mpg: number;
  // cylinders: number;
  // displacement: number;
  // drive: string;
  // fuel_type: string;
  // highway_mpg: number;
  // make: string;
  // model: string;
  // transmission: string;
  // year: number;
  id: number;
  title: string;
  price: number;
  description: string;
  images: [string];
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface FilterProps {
  title?: string;
  priceMin?: number;
  priceMax?: number;
  categoryId?: number;
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  id: number;
  name: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (value: any) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (newLimit: number) => void;
}

export interface SearchBarProps {
  setTitle: (title: string) => void;
}
