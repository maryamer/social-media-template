import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IconsHandler from "./IconsHandler";
import Modal from "./Modal/Modal";
import { useTheme } from "../../context/ThemeContext";

export default function MenuItem({ title, direction, isSidebar }) {
  const { themeHandler } = useTheme();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        to={direction === "/login" ? "" : direction}
        onClick={() => (
          title === "Dark/Light" && themeHandler(),
          direction === "/login" && setIsOpenModal(true)
        )}
        className={`${
          isSidebar &&
          `${
            title === "Create" || title === "Dark/Light"
              ? "hidden md:flex"
              : "flex"
          } md:w-full`
        }`}
      >
        {({ isActive }) => (
          <div
            className={[
              `${
                isSidebar
                  ? `${
                      title === "Create" || title === "Dark/Light"
                        ? "flex"
                        : "flex"
                    }  justify-center flex font-bold p-1 md:justify-normal w-full rounded-2xl dark:lg:hover:bg-slate-800 hover:bg-gray-400 hover:text-gray-200 transition duration-150 ease-in-out`
                  : "flex justify-center items-center font-bold  w-fit text-gray-800 dark:text-gray-200 md:w-full  hover:opacity-70   transition duration-250 ease-in-out"
              }`,
              isActive && direction && isSidebar ? "dark:bg-slate-800" : "",
              isActive && !isSidebar ? " border-b" : "",
            ].join(" ")}
          >
            <IconsHandler title={title} />

            <span
              className={` whitespace-nowrap text-sm w-fit xl:font-bold xl:text-lg items-center hidden lg:flex  `}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;{title}
            </span>
          </div>
        )}
      </NavLink>
      <Modal
        onOpen={setIsOpenModal}
        open={isOpenModal}
        message={"logout"}
        cb={() => navigate("/login")}
      />
    </>
  );
}
