// ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import lightTheme from "../modes/lightTheme";
import darkTheme from "../modes/darkTheme";

const ThemeContext = createContext("");

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  
  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, selectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
};



