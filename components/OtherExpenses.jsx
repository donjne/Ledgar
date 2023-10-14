import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddBudgetOverlay from "./AddBudgetOverlay";

const OtherExpenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Books", amount: 1000,},
    { id: 2, name: "Expense 2", amount: 200 },
    { id: 3, name: "Expense 3", amount: 300 },
  ]);
  const [isAddOverlayVisible, setIsAddOverlayVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isDeleteOverlayVisible, setIsDeleteOverlayVisible] = useState(false);
  const [deletedExpense, setDeletedExpense] = useState(null);

  const showAddOverlay = () => {
    setSelectedExpense(null);
    setIsAddOverlayVisible(true);
  };

  const hideAddOverlay = () => {
    setIsAddOverlayVisible(false);
  };

  const handleEditExpense = (expense) => {
    setSelectedExpense(expense);
    setIsAddOverlayVisible(true);
  };

  const showDeleteOverlay = (expense) => {
    setDeletedExpense(expense);
    setIsDeleteOverlayVisible(true);
  };

  const hideDeleteOverlay = () => {
    setDeletedExpense(null);
    setIsDeleteOverlayVisible(false);
  };

  const handleDelete = () => {
    if (deletedExpense) {
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== deletedExpense.id));
      // Transfer the deleted expense to the Archives component
      // Assuming you have a function to handle transferring expenses to the Archives
      // transferToArchives(deletedExpense);
    }
    setIsDeleteOverlayVisible(false);
  };

  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="flex items-center rounded-md p-3 hover:bg-[#268bdd] m-2 justify-between">
            <div>
              <span>{expense.name}</span>
              <span className="font-semibold ml-5 text-gray-500">NGN {expense.amount}</span>

            </div>
            <div>
              <button onClick={() => handleEditExpense(expense)} className="mr-3">
                <FaEdit />
              </button>
              <button onClick={() => showDeleteOverlay(expense)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isAddOverlayVisible && (
        <AddBudgetOverlay
          expense={selectedExpense}
          onClose={hideAddOverlay}
          showEndDate={false}
        />
      )}

      {isDeleteOverlayVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-black">
            <p>Do you want to delete?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg" onClick={hideDeleteOverlay}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherExpenses;
