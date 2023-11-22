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
      className={`md:w-full`}
    >
      {({ isActive }) => (
        <div
          className={[
            `${
              isSidebar
                ? `${
                    title === "Create" || title === "Dark/Light"
                      ? "hidden md:flex"
                      : "flex"
                  }  justify-center flex font-bold p-1 md:justify-normal w-full rounded-2xl dark:lg:hover:bg-slate-800 hover:bg-gray-400 hover:text-gray-200 transition duration-150 ease-in-out`
                : "flex justify-center font-bold border-b-0 w-full text-gray-800 dark:text-gray-200 md:w-full lg:hover:border-b-2 hover:border-b-gray-400 transition duration-250 ease-in-out"
            }`,
            isActive && direction ? "dark:bg-slate-800" : "",
          ].join(" ")}
        >
          <IconsHandler title={title} />

          <span
            className={` whitespace-nowrap text-sm w-full xl:font-bold xl:text-lg items-center hidden lg:flex  `}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;{title}
          </span>
        </div>
      )}
    </NavLink>
  );
}
