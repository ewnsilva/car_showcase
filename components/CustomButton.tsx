"use client";

import { CustomButtomProps } from "../types";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
