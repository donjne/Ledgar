import React from "react";

const ExpensesButton = () => {
  const pieChartData = [
    { category: "Category 1", value: 40 },
    { category: "Category 2", value: 30 },
    { category: "Category 3", value: 20 },
    // Add more data as needed
  ];

  const tableData = [
    { name: "Food", amount: "18,000" },
    { name: "Rent", amount: "25,000" },
    // Add more data as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4 ml-7 mt-3">
        <div className="flex items-center">
          <span className="calendar-icon">📅</span>
          <button className="calendar-button ml-2 mr-3">Day</button>
          <button className="calendar-button mr-3">Week</button>
          <button className="calendar-button mr-3">Month</button>
          <button className="calendar-button mr-3">Year</button>
        </div>
      </div>
      <div className="border rounded border-gray-300 m-4">
      <div className="flex justify-between items-center mb-4">
  <div>
    <h3 className="text-xl mb-4 ml-4 mt-4">Overview</h3>
  </div>
  <div className="p-4">
    <select className="month-dropdown text-white rounded bg-[#2b2b2b] border">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
      {/* Add more months as needed */}
    </select>
  </div>
</div>

        <div className="flex justify-center bg-white">
          <div className="pie-chart">
            {/* Replace with your pie chart implementation */}
            <svg width="200" height="200">
              {/* Dummy chart */}
              {pieChartData.map((data, index) => (
                <circle
                  key={index}
                  cx="100"
                  cy="100"
                  r="80"
                  fill={data.color}
                  stroke="none"
                  style={{ transform: `rotate(${data.angle}deg)` }}
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="legend">
            {pieChartData.map((data, index) => (
              <div className="legend-item" key={index}>
                <div
                  className="legend-color"
                  style={{ backgroundColor: data.color }}
                ></div>
                <span>{data.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <table className="expenses-table m-5">
        <thead>
          <tr>
            <th>Expenses Breakdown (NGN)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SavingsButton = () => {
  return <button className="savings-button">Savings</button>;
};

export { ExpensesButton, SavingsButton };
