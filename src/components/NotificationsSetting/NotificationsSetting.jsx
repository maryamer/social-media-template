import React from "react";
import { useState } from "react";

export default function NotificationsSetting() {
  const [userDetails, setUserDetails] = useState({
    name: "maryam",
    username: "maryam_er",
    email: "maryam@gmail.com",
    phone: "09954444443",
    country: "Iran",
    gender: "female",
  });
  const radioOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const onChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full mx-auto ">
      <div className="px-1 py-2 flex flex-col items-center justify-center">
        <div className="dark:bg-slate-900 bg-white overflow-hidden shadow w-full md:w-5/6 rounded-lg ">
          <div className="px-4 py-5 flex items-center justify-center md:justify-start "></div>
          <div className=" px-4 py-5 sm:p-0">
            <div className="divide-y dark:divide-gray-800 divide-slate-400 ">
              <SettingItem
                title={"Messages"}
                value={userDetails.name}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"Likes"}
                value={userDetails.email}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"Comments"}
                value={userDetails.phone}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"New Posts"}
                value={userDetails.country}
                onChangeHandler={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ title, value, onChangeHandler }) {
  return (
    <>
      <div className="flex justify-between p-5">
        <span>{title}</span>
        <span>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </span>
      </div>
    </>
  );
}
