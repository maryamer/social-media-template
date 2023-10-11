import React from "react";

export default function Notifications() {
  return (
    <div className="w-full h-screen text-white">
      <div className="sm:mx-auto h-full  w-full  sm:p-10 text-sm ">
        <div className="header w-full text-white">
          <div className="container flex items-center justify-between p-3">
            <p className="text-xl sm:text-2xl font-bold sm:font-extrabold">
              Notifications :
            </p>
          </div>
        </div>
        <div className="messages m-2">
          <div className="profile_pic rounded-xl flex justify-start items-center  gap-4 m-2 p-4 bg-slate-900">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="Mark-Webber"
              className=" w-[13%] sm:w-[8%] rounded-full"
            />
            <div className="notification-msg">
              <div className="msg-1">
                <p className="hover:text-slate-600 cursor-pointer">
                  <b>Mark Webber </b>{" "}
                  <span className="text-[#5e6778]">
                    {" "}
                    &nbsp; reacted to your recent post{" "}
                  </span>
                  <span className="text-[#5e6778] font-semibold hover:text-slate-600 cursor-pointer  ">
                    {" "}
                    My first tournament today! &nbsp;
                  </span>{" "}
                  <span className=" inline-flex items-center justify-center rounded-full bg-red-500  border-red-500 border-4"></span>
                </p>
                <p className="text-[#939dae]">1m ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="messages m-2">
          <div className="profile_pic rounded-xl flex justify-start items-center  gap-4 m-2 p-4 bg-slate-900">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="Mark-Webber"
              className=" w-[13%] sm:w-[8%] rounded-full"
            />
            <div className="notification-msg">
              <div className="msg-1">
                <p className="hover:text-slate-600 cursor-pointer">
                  <b>Mark Webber </b>{" "}
                  <span className="text-[#5e6778]">
                    {" "}
                    &nbsp; liked your post{" "}
                  </span>
                  <span className="text-[#5e6778] font-semibold hover:text-slate-600 cursor-pointer  ">
                    {" "}
                    My first tournament today! &nbsp;
                  </span>{" "}
                  <span className=" inline-flex items-center justify-center rounded-full bg-red-500  border-red-500 border-4"></span>
                </p>
                <p className="text-[#939dae]">1m ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="messages m-2">
          <div className="profile_pic rounded-xl flex justify-start items-center  gap-4 m-2 p-4 bg-slate-900">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="Mark-Webber"
              className=" w-[13%] sm:w-[8%] rounded-full"
            />
            <div className="notification-msg ">
              <div className="msg-1">
                <p className="hover:text-slate-600 cursor-pointer">
                  <b>Mark Webber </b>{" "}
                  <span className="text-[#5e6778]">
                    {" "}
                    &nbsp; commented on your post : {""}
                  </span>
                  <span className=" inline-flex items-center justify-center rounded-full bg-red-500  border-red-500 border-4"></span>
                  <span className="text-white">
                    beautiful mind beautiful life
                    <span className="text-slate-500 font-bold hover:text-slate-600">
                      {" "}
                      &nbsp; reply{" "}
                    </span>
                  </span>
                </p>
                <p className="text-[#939dae]">1m ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
