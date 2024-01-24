"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";

import SalesTrendMob from "@/components/mobsalestrend";
import TopPlat from "@/components/topplatform";

const Home = () => {
  return (
    <div>
      <SalesTrend />
      <SalesTrendMob />
      <div className="mt-3">
        <TopPlat />
      </div>
    </div>
  );
};

export default Home;
