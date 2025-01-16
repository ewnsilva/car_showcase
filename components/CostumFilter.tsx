"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Listbox, ListboxButton } from "@headlessui/react";
import { CustomFilterProps, OptionProps } from "../types";
import { updateSearchParams } from "../utils";

export const CostumFilter: React.FC<CustomFilterProps> = ({
  title,
  options,
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState<OptionProps | undefined>(
    {} as OptionProps
  );

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-bilter__btn">
            <span className="block truncate">{selected?.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </ListboxButton>
        </div>
      </Listbox>
    </div>
  );
};
