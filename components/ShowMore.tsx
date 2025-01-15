"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "../types";
import { CustomButton } from "./CustomButton";

export const ShowMore: React.FC<ShowMoreProps> = ({ isNext, pageNumber }) => {
  const router = useRouter();

  const handleNavigation = () => {};

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
