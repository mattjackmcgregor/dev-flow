"use client";

import React from "react";
import Image from "next/image";
// import { Input } from "@/components/ui/input";

interface CustomImportProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder?: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomImportProps) => {
  return (
    <div className="relative w-full max-w-full">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        {/* <Input
          type="text"
          placeholder={placeholder}
          onChange={() => {}}
          value=""
          className="paragraph-regular no-focus placeholder background-light800_dark400 border-none shadow-none outline-none"
        /> */}
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;
