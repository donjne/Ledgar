import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Archives = () => {
  const [archivedItems, setArchivedItems] = useState([
    { id: 1, name: "Archive Item 1", amount: 100 },
    { id: 2, name: "Archive Item 2", amount: 200 },
    { id: 3, name: "Archive Item 3", amount: 300 },
  ]);

  const handleDelete = (itemId) => {
    setArchivedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const ArchiveItem = ({ id, name, amount }) => {
    const [isDeleteOverlayVisible, setIsDeleteOverlayVisible] = useState(false);

    const showDeleteOverlay = () => {
      setIsDeleteOverlayVisible(true);
    };

    const hideDeleteOverlay = () => {
      setIsDeleteOverlayVisible(false);
    };

    const handleDeleteItem = () => {
      handleDelete(id);
      hideDeleteOverlay();
    };

    return (
      <li className="flex items-center justify-between py-2 m-4">
        <div>
          <span>{name}</span>
          <span className="ml-9 text-gray-500"> NGN {amount}</span>
        </div>
        <div className="flex items-center">
          <button className="mr-2">
            <FaEdit />
          </button>
          <button className="mr-2" onClick={showDeleteOverlay}>
            <FaTrash />
          </button>
          {isDeleteOverlayVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg text-gray-500">
                <p>Do you want to delete permanently?</p>
                <div className="flex justify-end mt-4">
                  <button className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg" onClick={hideDeleteOverlay}>
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={handleDeleteItem}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div>
      <h2 className="ml-4 font-semibold text-2xl mt-6">Archives</h2>
      <ul>
        {archivedItems.map((item) => (
          <ArchiveItem key={item.id} id={item.id} name={item.name} amount={item.amount} />
        ))}
      </ul>
    </div>
  );
};

export default Archives;
