import * as React from "react";

function IncomeComponent() {
  return (
    <form className="justify-center items-stretch border bg-white flex max-w-[239px] flex-col p-4 rounded-2xl border-solid border-slate-100 dark:!bg-navy-800 dark:text-white">
      <header className="justify-between items-stretch flex gap-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a21ce6a1e7fc2e95375545bb0d50a79e5625db7a6f3e58492eba887d24eff235?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/772c0985586816f1755e0fb0396d1616074af9bd930bbcd6d34324f5e8ed907f?apiKey=252f8d5a726747838fcb04939a832fc3&"
          className="aspect-[3.25] object-contain object-center w-[104px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Image"
        />
      </header>
      <h2 className="text-zinc-500 text-lg font-medium leading-6 mt-2.5">
        Total Income
      </h2>
      <div className="text-gray-700 text-2xl font-semibold leading-8 mt-1.5">
        $350.000
      </div>
      <div className="items-stretch flex justify-between gap-2.5 mt-2.5">
        <div className="justify-between items-center bg-emerald-400 bg-opacity-10 flex gap-1 px-2 py-1 rounded-[1000px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/152e81779252e0ffe18d5885981858bddcd2f725474ca6456d843d50e5967b78?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
            alt="Image"
          />
          <div className="text-emerald-400 text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
            23,5%
          </div>
        </div>
        <div className="text-zinc-600 text-sm self-center grow whitespace-nowrap my-auto">
          vs. previous month
        </div>
      </div>
    </form>
  );
}

export default IncomeComponent;
