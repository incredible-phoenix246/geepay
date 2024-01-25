import * as React from "react";
import Image from "next/image";
import { BoxTick, I3DRotate, ShoppingCart, Coin1 } from "iconsax-react";

function TotalRefundComponent() {
  return (
    <div
      className="justify-center items-stretch bg-white flex dark:!bg-navy-800 dark:text-white   max-w-[200px] flex-col p-2 rounded-2xl"
      aria-label="Total Refund"
    >
      <div className="justify-between items-stretch flex gap-5">
        <I3DRotate
          variant="Bulk"
          color="#34CAA5"
          className="aspect-square object-contain object-center w-10 h-10 overflow-hidden shrink-0 max-w-full border rounded-full p-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/38027197235739f5d02df461f937c366fba896be1ce738e0a52926e3ee9ca9ed?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="aspect-[3.25] object-contain object-center w-[104px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Banner Image"
        />
      </div>
      <h2 className="text-zinc-500 text-lg font-medium leading-6 mt-2.5">
        Total Refund
      </h2>
      <h1
        className="text-gray-700 text-2xl font-semibold leading-8 mt-1.5"
        aria-label="Refund Amount"
      >
        270
      </h1>
      <div className="items-stretch flex justify-between gap-2.5 mt-2.5">
        <div
          className="justify-between items-center bg-red-500 bg-opacity-10 flex gap-1 px-1 py-1 rounded-[1000px]"
          aria-label="Percentage"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3aed9072ff333a6248a5b31bff38fc02b47fb4fb28f5f375097d50d89bc5b9?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="aspect-square object-contain object-center w-2 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            alt="Percentage Icon"
          />
          <div className="text-red-500 text-[8px] font-medium leading-4 self-stretch grow whitespace-nowrap">
            23,5%
          </div>
        </div>
        <div className="text-zinc-600 text-sm self-center grow whitespace-nowrap my-auto">
          vs. previous month
        </div>
      </div>
    </div>
  );
}

export default TotalRefundComponent;
