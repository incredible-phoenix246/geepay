"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";

import SalesTrendMob from "@/components/mobsalestrend";
import TopPlat from "@/components/topplatform";
import TopPlatmob from "@/components/mobtopcard";
import Order from "@/components/order";
import Widget from "@/components/widgets";
import { BoxTick, I3DRotate, ShoppingCart, Coin1 } from "iconsax-react";
import IncomeComponent from "@/components/income";
import MobileOrder from "@/components/ordersm";
import TotalRefundComponent from "@/components/funds";
import SalesStatistics from "@/components/stats";
import Order2 from "@/components/order2";

const Home = () => {
  return (
    <section className="">
      <div className="flex items-center w-full justify-between md:pr-5">
        <SalesTrend />
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
          <Order2 />
          <TotalRefundComponent />
          <SalesStatistics />
          <IncomeComponent />
        </div>
      </div>
      <SalesTrendMob />
      <div className="mt-3 flex w-full justify-between">
        <Order />
        <TopPlat />
      </div>
      <MobileOrder />
      <TopPlatmob />
    </section>
  );
};

export default Home;
