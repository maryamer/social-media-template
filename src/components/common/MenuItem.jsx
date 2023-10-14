import React from "react";
import { NavLink } from "react-router-dom";
import IconsHandler from "./IconsHandler";

export default function MenuItem({
  title,
  direction,
  isSidebar,
  themeHandler,
}) {
  return (
    <NavLink
      to={direction}
      onClick={themeHandler && themeHandler}
      className={`${
        isSidebar
          ? `flex justify-center font-bold  md:justify-normal md:p-3  md:w-full rounded-2xl lg:hover:bg-slate-800 transition duration-150 ease-in-out`
          : "flex justify-center font-bold   border-b-0  md:p-3   md:w-full  lg:hover:border-b-2 hover:border-b-gray-400 transition duration-250 ease-in-out"
      }`}
    >
      <IconsHandler title={title} />

      <span
        className={` whitespace-nowrap text-sm  xl:font-bold xl:text-lg items-center hidden lg:flex  `}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;{title}
      </span>
    </NavLink>
  );
}
