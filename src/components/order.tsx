"use client";
import { cn } from "@/utils";
import { Suspense } from "react";
import { users } from "@/constants";
import Link from "next/link";
import Tableskeleton from "./tableskel";
import { DocumentDownload } from "iconsax-react";
import Image from "next/image";
import Card from "./Card";

function Order() {
  return (
    <>
      <section
        className={cn(
          "w-full ml-[20px] hidden bg-white dark:!bg-navy-800 dark:text-white md:flex flex-col justify-center rounded-xl  lg:max-w-[806px] max-h-[418px] max-w-[600px]"
        )}
      >
        <div className="w-full flex items-center justify-between px-5 py-2">
          <h2 className="text-lg font-medium leading-[28.8px] text-black dark:text-white">
            Last Order
          </h2>

          <div>
            <Link href="/" className="text-[#34CAA5] ">
              See All
            </Link>
          </div>
        </div>
        <div className="flex flex-nowrap items-center   w-full h-[56px] border-b border-gray-200 ">
          <span className="w-full pl-3 max-w-[230px] flex items-center justify-start h-full">
            Name
          </span>

          <span className=" font-medium w-full max-w-[101px] flex items-center  h-full justify-start">
            Status
          </span>
          <span className=" font-medium w-full max-w-[97px] flex items-center justify-center h-full">
            Date
          </span>
          <span className=" font-medium w-full max-w-[150px] flex items-center justify-center h-full">
            Amount
          </span>
          <span className=" font-medium w-full max-w-[97px] flex items-center justify-center h-full">
            Details
          </span>
        </div>
        <div className="flex w-full h-[400px] hide-scroll overflow-y-auto flex-col">
          {users.map((student) => (
            <Suspense key={student.id} fallback={<Tableskeleton />}>
              <div
                key={student.id}
                className={cn(
                  "flex flex-nowrap  items-center  w-full h-[70px]  border-b border-gray-200 py-1 transition-all duration-300"
                )}
              >
                <span className="w-full max-w-[60px]  justify-center h-full flex items-center px-1 ">
                  <Image
                    src={student.avatar}
                    alt={"avatar"}
                    width="40"
                    height="40"
                    className=" w-10 h-10 rounded-full"
                  />
                </span>
                <span className="text-[18px] w-full max-w-[167px] flex items-center justify-start  h-full text-center">
                  {student.name}
                </span>

                <span className="w-full max-w-[101px] flex items-center justify-start   h-full">
                  <span
                    className={cn("px-2 py-1 rounded-xl", {
                      "text-[#34CAA5]": student.status === "Paid",
                      " text-[#ED544E]": student.status === "Refund",
                    })}
                  >
                    {student.status}
                  </span>
                </span>
                <span className="w-full max-w-[116px]  justify-center h-full flex items-center px-1 ">
                  {student.date}
                </span>
                <span className="w-full max-w-[116px]  justify-center h-full flex items-center px-1 ">
                  {student.amount}
                </span>
                {/* <span className="text-[16px] w-full max-w-[97px] flex items-center justify-center  h-full text-center">
                  {student.grades}% {getArrowIndicator(student.grades)}
                </span>
                <span className="text-[16px] w-full max-w-[217px] flex items-center justify-center h-full pl-2">
                  {student.email}
                </span> */}
                <span className="text-[16px] w-full max-w-[150px] flex items-center justify-center  h-full flex-nowrap">
                  <button
                    className="text-[16px] flex  gap-x-2"
                    // href={`/student/${student.id}`}
                  >
                    <DocumentDownload />
                    <span className="">View</span>
                  </button>
                </span>
              </div>
            </Suspense>
          ))}
        </div>
      </section>
    </>
  );
}

export default Order;
