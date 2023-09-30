import React from "react";
import { ExpensesButton, SavingsButton } from "./MiddleDashboard";

const MainDashboard = () => {
  return (
    <div className="flex justify-evenly text-black bg-[#2b2b2b] space-x-4">
      <div className="rounded-b-md bg-blue-200 p-4 w-1/3">
        <h2 className="text-md mb-2">Total Budget Balance</h2>
        <div className="flex items-center">
          <span className="text-gray-500 text-lg mr-2">₦</span>
          <span className="text-lg">500,000</span>
        </div>
      </div>
      <div className="rounded-b-md bg-pink-200 p-4 w-1/3">
        <h2 className="text-md mb-2">Total Savings</h2>
        <div className="flex items-center">
          <span className="text-gray-500 text-lg mr-2">₦</span>
          <span className="text-lg">100,000</span>
        </div>
      </div>
      <div className="rounded-b-md bg-green-200 p-4 w-1/3">
        <h2 className="text-md mb-2">Total Expenses</h2>
        <div className="flex items-center">
          <span className="text-gray-500 text-lg mr-2">₦</span>
          <span className="text-lg">400,000</span>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
