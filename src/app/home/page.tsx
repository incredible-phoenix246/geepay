import React from "react";

function SalesDashboard() {
  return (
    <div
      className="justify-center items-stretch border bg-white flex max-w-[300px] md:max-w-[239px] flex-col p-4 rounded-2xl border-solid border-slate-100"
      role="tabpanel"
      aria-label="Sales Dashboard"
    >
      <header className="justify-between items-stretch flex gap-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76ccc68d973a9e7576903fbefcc91f77798d5378a6e78542a8cd0ab0215fa940?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae46b12b6f48f7ba1a31db05c3147d2f30e040d0630f61bce4ec9193c053ad92?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="aspect-[3.25] object-contain object-center w-[104px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Image"
        />
      </header>
      <h2 className="text-zinc-500 text-lg font-medium leading-6 mt-2.5">
        Average Sales
      </h2>
      <h1 className="text-gray-700 text-2xl font-semibold leading-8 mt-1.5">
        1567
      </h1>
      <div className="items-stretch flex justify-between gap-2.5 mt-2.5">
        <div className="justify-between items-center bg-red-500 bg-opacity-10 flex gap-1 px-2 py-1 rounded-[1000px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3aed9072ff333a6248a5b31bff38fc02b47fb4fb28f5f375097d50d89bc5b9?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            alt="Icon"
          />
          <div className="text-red-500 text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
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

export default SalesDashboard;
