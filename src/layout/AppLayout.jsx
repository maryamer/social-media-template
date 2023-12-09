import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function AppLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme}   flex justify-start flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-screen`}
    >
      <Toaster />
      <Sidebar />
      <Outlet />
    </div>
  );
}
