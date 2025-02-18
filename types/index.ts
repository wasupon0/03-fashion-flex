import { MouseEventHandler } from "react";

export interface ProductProps {
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
  price_min?: number;
  price_max?: number;
  categoryId?: number;
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

// export interface CarCardProps {
//   model: string;
//   make: string;
//   mpg: number;
//   transmission: string;
//   year: number;
//   drive: string;
//   cityMPG: number;
// }

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
  value: string;
  name: string;
}

export interface CustomFilterProps {
  name: string;
  options: OptionProps[];
}

export interface CustomSliderProps {
  min_name: string;
  max_name: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  isReady: boolean;
}
