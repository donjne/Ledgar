import React from "react";


const CardAccountLayout = () => {
  return (
    <div className="flex w-full">
      <div>
        <h2 className="flex justify-center pl-3 text-2xl">
          Bank Cards
        </h2>
        <div className="flex justify-center items-center top-1/2">
        <button type="submit" className="p-2 mt-4 bg-purple-500 rounded-sm">
        Add Card +
        </button>
        </div>
      </div>
    </div>
  );
}

export default CardAccountLayout;
