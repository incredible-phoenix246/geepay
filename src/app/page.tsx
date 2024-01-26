"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";
import SalesTrendMob from "@/components/mobsalestrend";
import TopPlat from "@/components/topplatform";
import TopPlatmob from "@/components/mobtopcard";
import Order from "@/components/order";
import IncomeComponent from "@/components/income";
import MobileOrder from "@/components/ordersm";
import TotalRefundComponent from "@/components/funds";
import SalesStatistics from "@/components/stats";
import Order2 from "@/components/order2";

const Home = () => {
  return (
    <section className="md:my-0 my-3">
      <div className="flex items-center w-full gap-5 justify-between">
        <SalesTrend />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ml-2 md:ml-0 md:pl-0 mb-5 md:mb-0 gap-5 max-h-[4180x] overflow-y-auto overflow-x-hidden self-center md:mt-0 mt-3">
          <Order2 />
          <TotalRefundComponent />
          <SalesStatistics />
          <IncomeComponent />
        </div>
      </div>
           <SalesTrendMob />
      <div className="mt-3 flex w-full justify-between gap-5">
        <Order />
        <TopPlat />
      </div>
      <div className=" flex flex-col gap-4">
        <MobileOrder />
        <TopPlatmob />
      </div>
    </section>
  );
};

export default Home;
