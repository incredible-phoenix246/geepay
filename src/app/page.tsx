"use client";
import React from "react";
import SalesTrend from "@/components/salestrend";

import SalesTrendMob from "@/components/mobsalestrend";

const Home = () => {
  return (
    <div>
      <SalesTrend />
      <SalesTrendMob />
    </div>
  );
};

export default Home;
