import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const OpenSettingContext = createContext();

export function OpenSettingProvider({ children }) {
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <OpenSettingContext.Provider value={{ isSettingOpen, setIsSettingOpen }}>
      {children}
    </OpenSettingContext.Provider>
  );
}

export const useSetting = () => useContext(OpenSettingContext);
