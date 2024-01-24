"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";

import SalesTrendMob from "@/components/mobsalestrend";
import TopPlat from "@/components/topplatform";
import TopPlatmob from "@/components/mobtopcard";
import Order from "@/components/order";
import Widget from "@/components/widgets";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { BoxTick, I3DRotate } from "iconsax-react";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <SalesTrend />
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
          <Widget
            icon={<BoxTick className="h-7 w-7" variant="TwoTone" />}
            title={"Earnings"}
            subtitle={"$340.5"}
          />
          <Widget
            icon={<I3DRotate className="h-6 w-6" variant="TwoTone" />}
            title={"Spend this month"}
            subtitle={"$642.39"}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Sales"}
            subtitle={"$574.34"}
          />
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Your Balance"}
            subtitle={"$1,000"}
          />
        </div>
      </div>
      <SalesTrendMob />
      <div className="mt-3 flex w-full justify-between">
        <Order />
        <TopPlat />
      </div>
      <TopPlatmob />
    </div>
  );
};

export default Home;
