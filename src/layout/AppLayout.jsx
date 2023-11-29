import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div
      className={`  flex justify-start flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-screen`}
    >
      <Toaster />
      <Sidebar />
      <Outlet />
    </div>
  );
}
