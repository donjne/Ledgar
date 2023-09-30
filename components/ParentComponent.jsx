import React, { useState } from "react";
import AddBudgetOverlay from "./AddBudgetOverlay";
import Budget from "./Budget";
import NewBudget from "./NewBudget";

const ParentComponent = () => {
  const [budgetItems, setBudgetItems] = useState([]);

  const handleAddBudgetItem = (budgetItem) => {
    setBudgetItems([...budgetItems, budgetItem]);
  };

  const handleDeleteBudgetItem = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Render the existing budget items */}
      {budgetItems.map((item) => (
        <Budget
          key={item.id}
          name={item.name}
          amount={item.amount}
          onDelete={() => handleDeleteBudgetItem(item.id)}
        />
      ))}

      {/* Render the AddBudgetOverlay component */}
      <NewBudget onAdd={handleAddBudgetItem} />
    </div>
  );
};

export default ParentComponent;
