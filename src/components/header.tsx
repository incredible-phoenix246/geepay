import React from "react";
import Image from "next/image";
import { Calendar, SearchNormal1, Notification, ArrowDown2 } from "iconsax-react";

function Header() {
  return (
    <header className="justify-end items-stretch bg-neutral-50 flex flex-col pt-5">
      <div className="justify-between items-stretch flex gap-5 mx-5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <div className="justify-between items-stretch flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-xl font-semibold leading-7 grow shrink basis-auto my-auto">
            Dashboard
          </div>
          <div className="items-stretch border bg-white flex justify-between gap-2 px-4 py-3 rounded-3xl border-solid border-zinc-300 max-md:pr-5">
            <SearchNormal1 />
            <div className="text-neutral-400 text-base leading-6 grow">
              <input
                type="text"
                placeholder="Search..."
                aria-label="Search"
                role="search"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between items-stretch flex gap-5 my-auto pl-4">
            <div className="justify-center items-stretch flex gap-2.5 my-auto">
              <Calendar />
              <div className="text-zinc-800 text-sm font-medium leading-5 grow whitespace-nowrap">
                November 15, 2023
              </div>
            </div>
            <div className="justify-center items-center flex aspect-square flex-col w-10 h-10 px-2.5 rounded-3xl border-[0.769px] border-solid border-zinc-300">
              <Notification />
            </div>
          </div>
          <div className="justify-between items-stretch border flex gap-3 px-2 py-1.5 rounded-3xl border-solid border-zinc-300">
            <div className="items-stretch flex justify-between gap-2">
              <Image
                loading="lazy"
                src="/assets/user.jpg"
                className="aspect-square object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full self-start"
                alt="Profile"
                width="38"
                height="38"
              />
              <div className="items-stretch flex grow basis-[0%] flex-col whitespace-nowrap text-right">
                <div className="text-zinc-800 text-base">Justin Bergson</div>
                <div className="text-zinc-500 text-sm mt-1">
                  Justin@gmail.com
                </div>
              </div>
            </div>
            <ArrowDown2 className="hidden md:flex" />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 min-h-[1px] w-full mt-4 max-md:max-w-full" />
    </header>
  );
}

export default Header;
