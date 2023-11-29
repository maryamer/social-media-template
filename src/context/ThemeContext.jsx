import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const themeHandler = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "dark" ? "light" : "dark")
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
