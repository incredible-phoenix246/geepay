"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Add,
  Notification,
  Profile,
  Setting4,
  LogoutCurve,
  HambergerMenu,
  Calendar,
  ArrowDown2,
} from "iconsax-react";
import useVisible from "@/hooks/useVisible";
import { useRouter } from "next/navigation";
import NavLink from "./some";
import { FiSearch } from "react-icons/fi";

const Nav = (props: { brandText: string }) => {
  const { brandText } = props;

  const [todayDate, setTodayDate] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { ref: searchRef, isVisible: searchDropdown, setIsVisible: setSearchDropdown } = useVisible();

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

  const handleCalendarClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const {
    ref: profileRef,
    isVisible: profileDropdown,
    setIsVisible: setProfileDropdown,
  } = useVisible();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 flex flex-row w-full items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d] sm:min-h-[70px]">
      <div className="ml-[6px]">
        <Pathname />
      </div>
      <div className="relative mt-[3px] md:flex hidden h-[61px] flex-grow items-center justify-around gap-2 rounded-full bg-white py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:flex-grow-0 md:gap-1">
        <div className="flex h-[61px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
      </div>
      <div className="flex space-x-5 dark:!text-white">
        <div
          className={`sm:cursor-pointer ${
            isDropdownVisible ? "bg-gray-200 p-2 rounded" : ""
          }`}
         onClick={() => setSearchDropdown(true)}>
                  <Calendar />
        </div>
        <h2 className="hidden md:flex">{todayDate}</h2>
        <Notification />
      </div>
      <div
        className="items-center justify-center border flex gap-3 md:px-2 md:py-1.5 rounded-full border-solid border-zinc-300 dark:text-white  cursor-pointer"
        onClick={() => setProfileDropdown(true)}
      >
        <div className="flex justify-between gap-2 items-center">
          <div
            className="cursor-pointer w-[32px] h-[32px]"
            onClick={() => setProfileDropdown(true)}
          >
            <Image
              loading="lazy"
              src="/assets/user.jpg"
              alt="profile"
              width={32}
              height={32}
              className={`w-full h-full object-cover rounded-full`}
            />
          </div>
          <div className="items-center grow basis-[0%] flex-col whitespace-nowrap text-right hidden md:flex">
            <div className="text-zinc-800 text-base">Phoenix</div>
            <div className="text-zinc-500 text-sm mt-1">phoenix@gmail.com</div>
          </div>
        </div>

        <ArrowDown2 className="hidden md:flex" />
      </div>

        {searchDropdown && (
          <div
            ref={searchRef}
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
            className="absolute bg-white-N0 rounded-lg w-[15rem] p-3 right-8 top-[80px]"
          >
           <h2>{todayDate}</h2>
          </div>
        )}

      {isDropdownVisible && (
        <div className="absolute left-0 mt-2 p-2 bg-white border border-gray-300 rounded shadow">
          
        </div>
      )}
      {profileDropdown && (
        <div
          ref={profileRef}
          style={{
            boxShadow:
              "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
          }}
          className="absolute bg-white rounded-lg w-[15rem] p-3 right-0 top-[50px] md:top-[80px] z-50  dark:!bg-navy-800 dark:text-white "
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 border-b border-b-Grey-G30 pb-3 px-2">
              <div className="w-[40px] h-[40px] rounded-full">
                <Image
                  loading="lazy"
                  src="/assets/user.jpg"
                  alt="profile"
                  width={40}
                  height={40}
                  className={`w-full h-full object-cover rounded-full ${"border-2 border-primary-100"}`}
                />
              </div>
              <p className="text-Grey-G500 font-semibold text-base">Phoenix</p>
            </div>
            <div className="space-y-2 border-b border-b-Grey-G30 pb-3">
              <Link href="/profile">
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                  <Profile size={18} />
                  <p className="text-Grey-G500 font-medium text-sm">
                    View profile
                  </p>
                </div>
              </Link>
              <Link href="/settings">
                <div className="flex items-center gap-2 p-2 cursor-pointer rounded-lg">
                  <Setting4 size={18} />
                  <p className="text-Grey-G500 font-medium text-sm">Settings</p>
                </div>
              </Link>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer rounded-lg"
            >
              <LogoutCurve size={18} />
              <p className="text-Grey-G500 font-medium text-sm">Logout</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

export function Pathname() {
  const pathname = usePathname();
  let formattedPathname;

  if (pathname === "/") {
    formattedPathname = "Dashboard";
  } else {
    formattedPathname =
      pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  }

  return (
    <div className="dark:text-white md:text-3xl text-lg">
      {formattedPathname}
    </div>
  );
}