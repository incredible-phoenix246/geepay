import { useThemeContext } from "@/context/themectx";
import { cn } from "@/utils";
import React from "react";
import { BsMoon } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeButtons = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-full justify-between py-2  h-[92px]  dark:!bg-navy-800 max-w-[30px] self-center text-[30px]">
      <button
        type="button"
        className={cn(
          " text-[#B2ABAB]",
          theme === "light" && "bg-[#34CAA5]  rounded-full text-white"
        )}
        onClick={() => setTheme("light")}
      >
        <MdOutlineLightMode className="text-header dark:text-white" />
      </button>

      <button
        type="button"
        className={cn(
          " text-[#B2ABAB] ",
          theme === "dark" && "bg-[#34CAA5]   rounded-full text-white"
        )}
        onClick={() => setTheme("dark")}
      >
        <BsMoon className="text-header dark:text-white" />
      </button>
    </div>
  );
};

export default ThemeButtons;
