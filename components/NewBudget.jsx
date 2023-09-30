import { FaPlus } from "react-icons/fa";
import AddBudgetOverlay from "./AddBudgetOverlay";

const NewBudget = () => {
  const handleLinkClick = () => {
    // Code to execute when the link is clicked
    // You can write your custom logic here
  };

  return (
    <div className="flex items-center justify-between pt-0 pb-4">
      <h2 className=" ml-5 mt-60 justify-center text-center text-2xl font-bold text-white">Active Budgets</h2>
      <AddBudgetOverlay />
    </div>
  );
};

export default NewBudget;
