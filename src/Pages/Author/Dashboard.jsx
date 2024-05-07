import React, { useState } from "react";
import { useSelector } from "react-redux";
import PieChart from "./Components/PieChart";

const Dashboard = () => {
  const username = useSelector((state) => state.user.name);

  return (
    <>
      <div className=" flex justify-between max-w-[1240px] mx-auto mt-12">
        <div>
          <h1 className="text-4xl font-bold text-blue">
            Welcome <span className="text-black font-semibold">{username}</span>
          </h1>
        </div>

        <div className="h-96  w-1/3 mt-12">
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
