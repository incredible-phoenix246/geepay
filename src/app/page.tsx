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
import SalesDashboard from "@/components/sales";
import TotalRefundComponent from "@/components/funds";
import SalesStatistics from "@/components/stats";

const Home = () => {
  return (
    <section className="">
      <div className="flex items-center w-full justify-between md:pr-5">
        <SalesTrend />
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
          {/* <Widget
            icon={<BoxTick className="h-7 w-7" variant="Bulk"/>}
            title={"Earnings"}
            subtitle={"$340.5"}
          /> */}
          <IncomeComponent />
          <SalesDashboard />
          <TotalRefundComponent />
          <SalesStatistics />
          {/* <Widget
            icon={<I3DRotate className="h-6 w-6" variant="Bulk" />}
            title={"Spend this month"}
            subtitle={"$642.39"}
          /> */}
          {/* <Widget
            icon={<ShoppingCart className="h-7 w-7" variant="Bulk" />}
            title={"Sales"}
            subtitle={"$574.34"}
          /> */}
          {/* <Widget
            icon={<Coin1 className="h-6 w-6" />}
            title={"Your Balance"}
            subtitle={"$1,000"}
          /> */}
        </div>
      </div>
      <SalesTrendMob />
      <div className="mt-3 flex w-full justify-between">
        <Order />
        <TopPlat />
      </div>
      <TopPlatmob />
    </section>
  );
};

export default Home;
