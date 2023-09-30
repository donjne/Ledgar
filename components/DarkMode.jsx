import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <FaMoon className="text-gray-500" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
      <span className="font-semibold ml-2">{buttonText}</span>
    </div>
  );
};

export default DarkMode;
