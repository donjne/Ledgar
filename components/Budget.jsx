import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Budget = ({ name, amount = 0, onDelete = () => {} }) => {
  const [isDeleteOverlayVisible, setIsDeleteOverlayVisible] = useState(false);

  const showDeleteOverlay = () => {
    setIsDeleteOverlayVisible(true);
  };

  const hideDeleteOverlay = () => {
    setIsDeleteOverlayVisible(false);
  };

  const handleDelete = () => {
    onDelete();
    hideDeleteOverlay();
  };

  return (
    <li className="flex items-center pl-1 justify-between w-full h-[70px] rounded-md hover:bg-[#E57ACD] text-white cursor-pointer hover:text-black mb-4">
     

      <div className="flex items-center flex-col">
        {/* Display the appropriate icon based on the category */}
        {/* {name === "Food" && <span className="mb-1">🍔</span>}
        {name === "School" && <span className="mb-1">🎓</span>}
        {name === "Internet" && <span className="mb-1">🌐</span>}
        {name === "Transportation" && <span className="mb-1">🚗</span>}
        {name === "Electricity" && <span className="mb-1">💡</span>}
        {name === "Other" && <span className="mb-1">🔘</span>}
        {name === "Shopping" && <span className="mb-1">🛍</span>} */}

          {/* Display the amount */}
      <div className="text-xs text-gray-500 font-semibold">NGN {amount.toLocaleString()}</div>

        {/* Display the name */}
        <span className="font-semibold mr-2">{name}</span>
        
        {/* Display the loading bar */}
        <div className="w-full bg-gray-300 h-2 rounded-lg mt-1">
          <div className={`h-full pl-2 rounded-lg ${amount >= 100 ? "bg-red-500" : "bg-blue-500"}`} style={{ width: `${amount}%`, maxWidth: "250%" }}></div>
        </div>
      </div>

      {/* Display edit and delete buttons */}
      <div className="flex items-center">
        <button className="mr-2">
          <FaEdit />
        </button>
        <button className="mr-2" onClick={showDeleteOverlay}>
          <FaTrash />
        </button>
      </div>

      {/* Delete overlay */}
      {isDeleteOverlayVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
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
    </li>
  );
};

export default Budget;
