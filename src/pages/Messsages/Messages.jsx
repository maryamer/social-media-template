import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Outlet, useParams } from "react-router-dom";
import InnerMessage from "../../components/InnerMessage/InnerMessage";
import MessageList from "../../components/MessageList/MessageList";

export default function Messages({ isSettingOpen, setIsSettingOpen }) {
  const { id } = useParams();
  return (
    <div className="text-white w-full h-full flex">
      <div
        className={`${
          isSettingOpen && id
            ? "hidden lg:flex"
            : !isSettingOpen && !id
            ? "flex w-screen"
            : !isSettingOpen && id
            ? "hidden lg:flex"
            : "hidden lg:flex"
        }  lg:w-1/4 lg:max-w-fit dark:bg-slate-950 mb-px border-r border-r-gray-500`}
      >
        <MessageList setIsSettingOpen={setIsSettingOpen} />
      </div>
      <div
        className={`${
          isSettingOpen && id
            ? "hidden lg:flex"
            : !isSettingOpen && id
            ? "flex w-screen"
            : "hidden lg:flex"
        }  lg:w-full  h-full min-w-fit dark:bg-slate-950`}
      >
        <Outlet />
      </div>
      {isSettingOpen && (
        <div className={`${id ? "" : ""}flex w-screen lg:w-1/4  bg-amber-300`}>
          <div onClick={() => setIsSettingOpen((prev) => !prev)}>
            <IoIosArrowRoundBack
              className="hover:text-slate-600 cursor-pointers w-12 h-12
           text-slate-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
