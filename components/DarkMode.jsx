// DarkMode.js
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const DarkMode = () => {
  const { mode, toggleMode } = useTheme();

  const buttonText = mode === "dark" ? "Dark Mode" : "Light Mode";

  const toggleDarkMode = () => {
    toggleMode();
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
      {mode === "dark" ? (
        <FaMoon className="text-gray-500" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
      <span className="font-semibold ml-2">{buttonText}</span>
    </div>
  );
};

export default DarkMode;
