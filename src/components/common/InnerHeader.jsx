import React from "react";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "../../context/ThemeContext";
import { useSetting } from "../../context/OpenSettingContext";

export default function InnerHeader({ direction, title, user }) {
  const { themeHandler } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setIsSettingOpen } = useSetting();

  return (
    <div
      className="messageHeader dark:bg-slate-950  top-0 right-0 left-0 w-full  flex justify-between items-center h-[7%]
       "
    >
      <div className="flex items-center justify-start hover:text-slate-400">
        <button
          onClick={() => {
            navigate(direction === "/profile" ? direction : -1);
            setIsSettingOpen(false);
          }}
          className="flex w-full lg:ml-2.5 text-slate-400"
        >
          <TiArrowBackOutline
            className="hover:text-slate-600 cursor-pointers p-1 w-8 h-8
          "
          />
          <span className="self-center font-bold">
            {title ? title : user ? user.username : "Back"}
          </span>
        </button>
      </div>
      {/* <CharaterName item={user} /> */}
      <div className="p-2">
        {(!pathname.includes("messages/") && pathname.includes("messages")) ||
        pathname.includes("settings") ||
        pathname.includes("user") ||
        pathname.includes("explore") ||
        pathname.includes("followers") ||
        pathname.includes("following") ||
        pathname.includes("profile/posts/") ||
        pathname.includes("notifications") ||
        title === "Messages" ||
        pathname.includes("search") ? (
          <button className="block md:hidden" onClick={() => themeHandler()}>
            <CgDarkMode className="xl:w-9  text-slate-500 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
          </button>
        ) : (
          <Link to={direction || ""}>
            <IoMdSettings
              onClick={() => setIsSettingOpen((prev) => !prev)}
              className="hover:text-slate-600 hover:cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-10 xl:h-10 w-8 h-8   text-slate-400"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
