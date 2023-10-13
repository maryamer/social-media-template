import React from "react";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";

export default function ProfileSettings() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [item, setItem] = useState({
    id: 2,
    profilePicture:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });
  return (
    <div className=" w-full  mx-auto text-black h-screen overflow-y-scroll scrollbar-none">
      <div className="px-3 py-2 flex flex-col items-center justify-center">
        <EditAvatar />
        <div className="bg-slate-900 overflow-hidden shadow w-4/6 rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-slate-400">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-800 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                  (123) 456-7890
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                  123 Main St Anytown, USA 12345
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
function EditAvatar() {
  return (
    <div className="flex w-5/6 items-center justify-center flex-col gap-1 text-center md:p-5 mt-4">
      <div className="flex  bg-center bg-no-repeat bg-cover w-36 h-36 rounded-full border border-gray-400 shadow-lg">
        <div className="relative">
          <img
            className=" rounded-full"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <span className="bottom-0 right-5 flex items-center cursor-pointer justify-center absolute  w-8 h-8 bg-blue-400 border-2 hover:bg-slate-400 dark:border-gray-800 rounded-full">
            <MdOutlineModeEdit />
          </span>
        </div>
      </div>
    </div>
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
