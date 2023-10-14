import React from "react";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

export default function ProfileSettings() {
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
    console.log(e.target.name);
    console.log(e.target.value);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full mx-auto ">
      <div className="px-1 py-2 flex flex-col items-center justify-center">
        <EditAvatar />
        <div className="dark:bg-slate-900 bg-white overflow-hidden shadow w-full md:w-5/6 rounded-lg ">
          <div className="px-4 py-5 flex items-center justify-center md:justify-start ">
            <h2 className="text-xl leading-6  font-bold text-slate-400">
              User Profile
            </h2>
            {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p> */}
          </div>
          <div className=" px-4 py-5 sm:p-0">
            <div className="divide-y dark:divide-gray-800 divide-slate-400 ">
              <SettingItem
                title={"name"}
                value={userDetails.name}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"email"}
                value={userDetails.email}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"phone"}
                value={userDetails.phone}
                onChangeHandler={onChangeHandler}
              />
              <SettingItem
                title={"country"}
                value={userDetails.country}
                onChangeHandler={onChangeHandler}
              />
              <div className="py-3  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                <div className="text-sm flex font-medium  text-gray-500 ">
                  <span className="w-[80%] ml-1">Gender</span>
                  <span className="text-xs text-blue-800 cursor-pointer">
                    Done
                  </span>
                </div>

                <span className="mt-1 text-sm flex items-center text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                  <div className="formControl flex">
                    {radioOptions.map((item) => (
                      <div key={item.value}>
                        {" "}
                        <input
                          type="radio"
                          id={item.value}
                          name="gender"
                          value={item.value}
                          onChange={() =>
                            setUserDetails({
                              ...userDetails,
                              gender: item.value,
                            })
                          }
                          checked={userDetails.gender === item.value}
                        />
                        &nbsp;
                        <label htmlFor={item.value}>{item.label}</label>
                        &nbsp;
                      </div>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function EditAvatar() {
  return (
    <div className="flex w-5/6 items-center md:items-start justify-center flex-col gap-1 text-center md:py-5 mt-4">
      <div className="flex  bg-center bg-no-repeat bg-cover w-36 h-36 rounded-full  shadow-lg">
        <div className="relative">
          <img
            className=" rounded-full"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <span className="bottom-0 right-5 flex items-center cursor-pointer justify-center absolute  w-8 h-8 bg-blue-400  hover:bg-slate-400 rounded-full">
            <MdOutlineModeEdit />
          </span>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ title, value, onChangeHandler }) {
  return (
    <>
      <div className="py-3  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
        <div className="text-sm flex font-medium items-center  text-gray-500">
          <input
            id={title}
            name={title}
            className=" dark:bg-slate-900 outline-none p-1 rounded-lg w-[80%]"
            onChange={onChangeHandler}
            value={value}
          />{" "}
          <span className="text-xs text-blue-800 cursor-pointer">Done</span>
        </div>
        <span className="mt-1 text-sm flex items-center text-gray-500 dark:text-gray-200 sm:mt-0 sm:col-span-2">
          &nbsp;{value}
        </span>
      </div>
    </>
  );
}

{
  /* <div className="grid grid-cols-3 gap-2 my-3">
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
        </div> */
}
