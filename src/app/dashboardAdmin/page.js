import React from "react";

import { TopCards } from "./components/TopCards.js";
import { Barchart } from "./components/Barchart.js";
import { RecentReserves } from "./components/RecentReserves.js";

export default function DashboardAdmin() {
  return (
    <>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4 ml-20">
        <Barchart />
        <RecentReserves />
      </div>
    </>
  );
}
