import React from "react";
import { cn } from "@/utils";

const Navbar = () => {
  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 dark:border-primary-light h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 dark:bg-primary backdrop-blur-lg w-full"
      )}
    ></header>
  );
};

export default Navbar;
