import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Outlet, useParams } from "react-router-dom";
import InnerMessage from "../../components/InnerMessage/InnerMessage";
import MessageList from "../../components/MessageList/MessageList";
import MessageSetting from "../../components/MessageSetting/MessageSetting";

export default function Messages({ isSettingOpen, setIsSettingOpen }) {
  const { id } = useParams();
  return (
    <div className="text-white w-full h-full flex dark:bg-slate-950">
      <div
        className={`${
          isSettingOpen && id
            ? "hidden lg:flex"
            : !isSettingOpen && !id
            ? "flex w-screen"
            : !isSettingOpen && id
            ? "hidden lg:flex"
            : "hidden lg:flex"
        }  lg:w-1/4 lg:max-w-fit  mb-px border-r border-r-gray-500`}
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
        }  lg:w-full  h-full min-w-fit  border-r border-r-gray-500 `}
      >
        <Outlet />
      </div>
      {isSettingOpen && (
        <div className={`${id ? "" : ""}flex w-screen h-screen lg:w-1/4 `}>
          <MessageSetting setIsSettingOpen={setIsSettingOpen} />
        </div>
      )}
    </div>
  );
}
