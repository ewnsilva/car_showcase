"use client";

import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./CustomButton";

export const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            alt="Car Hub Logo"
            className="object-contain"
            src="/logo.svg"
            height={18}
            width={118}
          />
        </Link>

        <CustomButton
          title="Sing In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
