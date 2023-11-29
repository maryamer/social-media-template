import { useNavigate } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import { NotificationsData } from "../../data/Data";

export default function Notifications() {
  const notifications = NotificationsData();

  return (
    <div className="w-full md:w-5/6 lg:w-1/2 h-screen overflow-y-auto scrollbar-none dark:text-white text-gray-700">
      <div className="sm:mx-auto h-full  sm:p-5 text-sm ">
        <InnerHeader title="Notifications" />
        {notifications.map((item) => {
          return item.type === "like" ? (
            <React.Fragment key={item.id}>
              <Like
                userName={item.username}
                userImage={item.userImage}
                postImageUrl={item.postImageUrl}
                userId={item.userId}
                time={"1m"}
              />
            </React.Fragment>
          ) : (
            <React.Fragment key={item.id}>
              <Comment
                userName={item.username}
                userImage={item.userImage}
                postImageUrl={item.postImageUrl}
                time={"1m"}
                comment={item.status}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";

function Comment({ userName, postImageUrl, time, userImage, comment }) {
  return (
    <div className="messages flex m-2">
      <div className="profile_pic w-[80%] rounded-xl flex justify-start items-center  gap-4  p-1 md:p-4 ">
        <img
          src={userImage}
          alt="Mark-Webber"
          className=" w-14 h-14 rounded-full"
        />
        <div className="notification-msg w-[80%]">
          <div className="msg-1">
            <p className="hover:text-slate-600 ">
              <b className="text-slate-400">{userName}</b>
              <span className="text-[#5e6778]">
                &nbsp; commented on your post{" :"}
              </span>
              <span className="text-slate-400 font-medium hover:text-slate-600   ">
                {" "}
                {comment}!&nbsp;
                <span className="text-slate-500 font-normal hover:text-slate-600">
                  reply{" "}
                  <span className="   whitespace-nowrap">
                    {time} &nbsp;
                    <span className=" inline-flex items-center justify-center rounded-full bg-red-500  border-red-500 border-4"></span>
                  </span>
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20%] flex items-center p-1 ">
        <img
          src={postImageUrl}
          alt="Mark-Webber"
          className=" h-auto self-center object-cover aspect-square rounded-lg"
        />
      </div>
    </div>
  );
}
function Like({ userName, postImageUrl, time, userImage, userId }) {
  const navigate = useNavigate();
  return (
    <div className="messages flex m-2">
      <div className="profile_pic w-[80%] cursor-pointer hover:opacity-80 rounded-xl flex justify-start items-center  gap-4  p-1 md:p-4 ">
        <img
          onClick={() => navigate(`/user/2/posts`)}
          src={userImage}
          alt="Mark-Webber"
          className=" w-14 h-14 object-cover rounded-full"
        />
        <div className="notification-msg w-[80%]">
          <div className="msg-1">
            <p className="hover:text-slate-600 ">
              <b className="text-slate-400">{userName}</b>
              <span className="text-[#5e6778]">&nbsp;liked your post </span>
              <span className="text-slate-400 font-medium hover:text-slate-600   ">
                <span className="text-slate-500 font-normal hover:text-slate-600">
                  <span className="   whitespace-nowrap">
                    {time} &nbsp;
                    <span className=" inline-flex items-center justify-center rounded-full bg-red-500  border-red-500 border-4"></span>
                  </span>
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20%] flex items-center p-1  ">
        <img
          src={postImageUrl}
          alt="Mark-Webber"
          className=" h-auto self-center w-16 cursor-pointer h-auto object-cover aspect-square hover:opacity-70 rounded-lg"
        />
      </div>
    </div>
  );
}
