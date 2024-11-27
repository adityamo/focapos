import React from "react";
// import DasboardAdmin from "@/modules/dashboard/DasboardAdmin";
// import PenjualanChart from "@/modules/dashboard/PenjualanChart";
import SalesToday from "@/modules/dashboard/SalesToday";
import MounthlySales from "@/modules/dashboard/MounthlySales";

const Dashboard = () => {
  return (
    <div className="relative space-y-5">
      <SalesToday />
      <MounthlySales />
    </div>
  );
};

export default Dashboard;
