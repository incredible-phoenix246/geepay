"use client";
import React, { useEffect, useState } from "react";
import { SIDEBAR_LINKS, Button_Link } from "@/constants";
import { cn } from "@/utils";
import { FlashCircle } from "iconsax-react";
import Link from "next/link";
import ThemeButton from "./themebtn";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, "$1");

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <section className="bg-white dark:bg-primary  z-[50] hidden  w-[88px]  hover:w-[150px] hover:p-4 transition-all duration-300 py-4 min-[1140px]:p-4 md:flex flex-col sidebar-scroll gap-y-4 items-center justify-between h-screen min-[1140px]:items-start fixed left-0 top-0 overflow-y-auto border-r border-gray-200 sidebar-scroll overflow-x-hidden group select-none  dark:!bg-navy-800 dark:text-white">
      <Link href="/" className="group-hover:w-full">
        <FlashCircle color="#34CAA5" variant="Bold" size={50} />
      </Link>
      <ul className="flex flex-col gap-y-4 pt-5">
        {SIDEBAR_LINKS.map((link) => (
          <Link
            href={`/${link.link}`}
            aria-current={activeLink === link.link ? "page" : undefined}
            key={link.id}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveLink(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              "flex items-center gap-x-5 py-2 px-3 h-[52px] text-[#3a3a3a] dark:text-gray-400 font-medium text-base transition-colors duration-300 cursor-pointer before:h-1 before:absolute before:right-1 before:top-0 before:transition-all before:duration-500",
              activeLink === link.link
                ? "text-[#0D062D] dark:bg-primary-light/75 dark:text-white rounded outline-none before:w-full active-link dark:after:bg-white"
                : "hover:bg-black/10 dark:hover:bg-color-dark/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
            )}
            onClick={() => setActiveLink(link.link)}
          >
            <link.icon
              size={30}
              aria-hidden
              // color={activeLink === link.link ? "#0D062D" : "#B2ABAB"}
              variant={activeLink === link.link ? "Bulk" : "Outline"}
            />

            {/* <span className=" max-[1139px]:hidden group-hover:block w-[185px]">
              {link.label}
            </span> */}
          </Link>
        ))}

        <span className="bg-[#8e8e8e] dark:bg-primary-light/70 w-full max-w-[245px] h-[1px] " />
        <ThemeButton />

        <span className="bg-[#8e8e8e] dark:bg-primary-light/70 w-full max-w-[245px] h-[1px] " />
      </ul>
      <ul className="flex flex-col gap-y-4">
        {Button_Link.map((link) => (
          <Link
            href={`/${link.link}`}
            aria-current={activeLink === link.link ? "page" : undefined}
            key={link.id}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveLink(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              "flex items-center gap-x-5 py-2 px-3 h-[52px] text-[#3a3a3a] dark:text-gray-400 font-medium text-base transition-colors duration-300 cursor-pointer before:h-1 before:absolute before:right-1 before:top-0 before:transition-all before:duration-500",
              activeLink === link.link
                ? "text-[#0D062D] dark:bg-primary-light/75 dark:text-white rounded outline-none before:w-full active-link"
                : "hover:bg-black/10 dark:hover:bg-color-dark/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
            )}
            onClick={() => setActiveLink(link.link)}
          >
            <link.icon
              size={30}
              aria-hidden
              // color={activeLink === link.link ? "#0D062D" : "#B2ABAB"}
              variant={activeLink === link.link ? "Bulk" : "Outline"}
            />

            {/* <span className=" max-[1139px]:hidden group-hover:block w-[185px]">
              {link.label}
            </span> */}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
