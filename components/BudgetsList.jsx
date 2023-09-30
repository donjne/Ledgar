// import React from "react";
// import Budget from "./Budget";

// const Budgets = () => {
//   const budgets = [
//     { id: 1, name: "Food", amount: 5000 },
//     { id: 2, name: "Internet", amount: 3000 },
//     { id: 3, name: "Shopping", amount: 8000 },
//     { id: 4, name: "Utilities", amount: 2000 },
//     { id: 5, name: "Electricity", amount: 4000 },
//     { id: 6, name: "Miscellaneous", amount: 1000 },
//   ];

//   const handleDelete = (id) => {
//     console.log(`Deleting budget with ID: ${id}`);
//   };

//   return (
//     <ul className="text-white flex flex-col pt-2 mt-2 mx-4">
//       {budgets.map((budget) => (
//         <Budget key={budget.id} name={budget.name} amount={budget.amount} onDelete={() => handleDelete(budget.id)} />
//       ))}
//     </ul>
//   );
// };

// export default Budgets;
