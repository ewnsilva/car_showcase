import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  fuel?: string;
  limit?: number;
  manufacturer?: string;
  model?: string;
  year?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  city_mpg: number;
  drive: string;
  make: string;
  model: string;
  mpg: number;
  transmission: string;
  year: number;
}

export interface CustomButtonProps {
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  rightIcon?: string;
  textStyles?: string;
  title: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  options: OptionProps[];
  title: string;
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
