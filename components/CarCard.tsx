"use client";

import Image from "next/image";

import { CustomButton } from "./CustomButton";
import { CarCardProps } from "../types";
import { calculateCarRent } from "../utils";
import { useState } from "react";

export const CarCard: React.FC<{ car: CarCardProps }> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, drive, make, model, mpg, transmission, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {" "}
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6">
        <span className="self-start text=[14px] font-semibold">$</span>
        <span className="text-[35px] font-extrabold">{carRent}</span>
        <span className="self-end text=[14px] font-semibold">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-whell.svg"
              width={20}
              height={20}
              alt="sterring wheel"
            />
            <p className="text=[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text=[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text=[14px]">{city_mpg} MPG</p>
          </div>

          <div className="car-card__btn-container">
            <CustomButton
              title="View More"
              containerStyles="w-full py=[16px]
            rounded-full bg-primary-blue"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};