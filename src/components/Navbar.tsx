"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils";
import { Input } from "./input";
import {
  SearchNormal1,
  Calendar,
  Notification,
  ArrowDown2,
} from "iconsax-react";
import Dropdown from "./dropdown";
import Image from "next/image";
import avatar from "../../public/assets/avatar.png";
import Link from "next/link";

const Navbar = () => {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const options: Record<string, string> = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    setTodayDate(formattedDate);
  }, []);
  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 dark:border-primary-light h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 dark:!bg-navy-800 backdrop-blur-lg w-full"
      )}
    >
      <div className="md:flex hidden gap-x-2 sm:gap-x-4 items-center">
        <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl capitalize font-medium text-[#26282C] dark:!text-white">
          Dashboard
        </h2>
      </div>
      <Input
        leftIcon={<SearchNormal1 />}
        type="text"
        placeholder="Search..."
        className="rounded-2xl w-[250px] dark:!bg-white "
        // value={searchValue}
        // onChange={handleInputChange}
      />
      <div className="md:flex hidden space-x-5 dark:!text-white">
        <Calendar />
        <h2>{todayDate}</h2>
        <Notification />
      </div>
      {/* <div className="flex space-x-5 dark:!text-white md:hidden">
        <h2>{todayDate}</h2>
      </div> */}
      <Dropdown
        button={
          <div className="flex space-x-2 dark:!text-white items-center justify-center">
            <Image
              width="20"
              height="20"
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
            <div className="hidden md:flex">
              <h2>Phoenix</h2>
              <span>phoenix@gmail.com</span>
            </div>
            <ArrowDown2 className="hidden md:flex" />
          </div>
        }
        classNames={
          "py-2 md:top-[50px]  w-max border rounded-full border-white"
        }
      >
        <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
          <div className="ml-4 mt-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                👋 Hey, Phoenix
              </p>{" "}
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

          <div className="ml-4 mt-3 flex flex-col">
            <Link
              href="/profile"
              className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
            >
              Profile Settings
            </Link>
            <a
              href=" "
              className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
            >
              Newsletter Settings
            </a>
            <a
              href=" "
              className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
            >
              Log Out
            </a>
          </div>
        </div>
      </Dropdown>
    </header>
  );
};

export default Navbar;
