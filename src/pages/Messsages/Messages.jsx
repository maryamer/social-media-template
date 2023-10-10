import React from "react";
import { BsBellSlash } from "react-icons/bs";
import { Outlet, useParams } from "react-router-dom";
import InnerMessage from "../../components/InnerMessage/InnerMessage";
import MessageSetting from "../../components/MessageSetting/MessageSetting";
import UsersList from "../../components/UsersList/UsersList";

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
        <UsersList
          setIsSettingOpen={setIsSettingOpen}
          title="Messages"
          locationParameter="1"
        >
          <div className="flex items-center mr-2">
            <BsBellSlash className="hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-5 xl:h-5 lg:w-4 lg:h-4   text-slate-400" />
            &nbsp;
            <span className="bg-blue-500 rounded-full w-3 h-3"></span>
          </div>
        </UsersList>
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
