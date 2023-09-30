import React from "react";

const RecentTransactions = () => {
  const expenses = [
    { name: "Food", amount: 18000 },
    { name: "Rent", amount: 25000 },
    { name: "Transportation", amount: 5000 },
    // Add more expenses as needed
  ];

  return (
    <div>
      <ul className="border rounded border-gray-300 p-4 mx-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>{expense.name}</span>
            <span className="text-red-700">NGN {expense.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
