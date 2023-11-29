import React, { useEffect } from "react";
import { BsBellSlash } from "react-icons/bs";
import { Outlet, useParams } from "react-router-dom";
import UsersList from "../../components/common/UsersList";
import MessageSetting from "../../components/MessageSetting/MessageSetting";
import { useSetting } from "../../context/OpenSettingContext";

export default function Messages() {
  const { isSettingOpen, setIsSettingOpen } = useSetting();
  useEffect(() => {
    return setIsSettingOpen(false);
  }, []);

  const { id } = useParams();
  return (
    <div className="dark:text-white fixed right-0 bottom-0 w-full h-full flex dark:bg-slate-950">
      <div
        className={`${
          isSettingOpen && id
            ? "hidden lg:flex"
            : !isSettingOpen && !id
            ? "flex w-screen"
            : !isSettingOpen && id
            ? "hidden lg:flex"
            : "hidden lg:flex"
        }  lg:w-1/4 lg:max-w-fit  mb-px  border-r dark:border-slate-800 border-slate-400  `}
      >
        <UsersList title="Messages" locationParameter="1">
          <div className="flex justify-end">
            <BsBellSlash className="hover:text-slate-600 cursor-pointer  xl:w-5 xl:h-5 lg:w-4 lg:h-4 text-slate-400" />
            &nbsp;
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
        }  lg:w-full h-full min-w-fit border-none  lg:border-r lg:border-r-slate-400 lg:dark:border-r-gray-500 `}
      >
        <Outlet />
      </div>
      {isSettingOpen && (
        <div className={`${id ? "" : ""}flex w-screen h-screen lg:w-1/4 `}>
          <MessageSetting />
        </div>
      )}
    </div>
  );
}
