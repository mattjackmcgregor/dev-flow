"use client";

import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className=" hidden flex-wrap items-center gap-3 lg:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          value={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100 text-primary-500"
              : "dark:text-light-500 bg-light-800 text-light-500 hover:bg-light-900 dark:bg-dark-300 dark:hover:bg-dark-400 "
          } `}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
