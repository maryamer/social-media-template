import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout({ themeHandler }) {
  //   const [isSettingOpen, setIsSettingOpen] = useState(false);
  //   const [theme, setTheme] = useState(
  //     JSON.parse(localStorage.getItem("theme")) || "dark"
  //   );
  //   const themeHandler = () => {
  //     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  //     localStorage.setItem(
  //       "theme",
  //       JSON.stringify(theme === "dark" ? "light" : "dark")
  //     );
  //   };
  return (
    <div
      className={`  flex justify-start flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-screen`}
    >
      <Toaster />
      <Sidebar themeHandler={themeHandler} />
      <Outlet />
    </div>
  );
}
