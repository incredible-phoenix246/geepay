"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";

import SalesTrendMob from "@/components/mobsalestrend";
import TopPlat from "@/components/topplatform";
import TopPlatmob from "@/components/mobtopcard";
import Order from "@/components/order";

const Home = () => {
  return (
    <div>
      <SalesTrend />
      <SalesTrendMob />
      <div className="mt-3">
        <TopPlat />
        <TopPlatmob />
      </div>
      <Order />
    </div>
  );
};

export default Home;
