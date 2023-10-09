import React, { useState } from "react";
import { IoIosArrowRoundBack, IoMdSettings } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function InnerMessage({ setIsSettingOpen }) {
  const [item, setItem] = useState({
    id: 2,
    profilePicture: "./assets/person/2.jpeg",
    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });
  return (
    <>
      <div className="flex flex-col gap-2 w-full  h-screen md:h-full justify-end">
        <InnerMessageHeader item={item} setIsSettingOpen={setIsSettingOpen} />
        <InnerMessages />
        <MessageInput />
      </div>
    </>
  );
}
function CharaterName({ item }) {
  return (
    <h3 className="name whitespace-nowrap font-bold md:text-lg   cursor-pointer min-w-fit ">
      <div>{item.username}</div>
    </h3>
  );
}
function InnerMessageHeader({ item, setIsSettingOpen }) {
  return (
    <div
      className="messageHeader border-b border-b-slate-500 flex   justify-between items-center h-[10%]
      p-3"
    >
      <div className="flex items-center hover:text-slate-400">
        <Link
          to="/messages"
          onClick={() => setIsSettingOpen(false)}
          className="flex w-full xl:mx-2 "
        >
          <IoIosArrowRoundBack
            className="hover:text-slate-600 cursor-pointers w-12 h-12
           text-slate-400"
          />
        </Link>
        <img
          src={item.profilePicture}
          alt={item.username}
          className="shareProfileImg group  cursor-pointer object-cover flex items-center shrink-0 grow-0 md:w-14 md:h-14  w-12 h-12 rounded-full"
        />
        &nbsp; &nbsp;&nbsp; &nbsp;
        <CharaterName item={item} />
      </div>
      <IoMdSettings
        onClick={() => setIsSettingOpen((prev) => !prev)}
        className="hover:text-slate-600 hover:cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-10 xl:h-10 w-8 h-8   text-slate-400"
      />
    </div>
  );
}
function InnerMessages() {
  return (
    <div className=" h-[80%] overflow-y-scroll md:scrollbar-thin">
      <div id="messages" className="flex flex-col  space-y-4 p-3 ">
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  Command was run with root privileges. I'm sure about that.
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I've update the description so it's more obviously now
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  FYI https://askubuntu.com/a/700266/510172
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Check the line above (it ends with a # so, I'm running it as
                  root )<pre># npm install -g @vue/devtools</pre>
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Any updates on this issue? I'm getting the same error when
                  trying to install devtools. Thanks
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Thanks for your message David. I thought I'm alone with this
                  issue. Please, ? the issue to support it{" "}
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Run this command sudo chown -R `whoami` /Users/
                  {/* {{ your_user_profile }}/.npm-global/ then install the package */}
                  globally without using sudo
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  It seems like you are from Mac OS world. There is no /Users/
                  folder on linux ?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  I have no issue with any other packages installed with root
                  permission globally.
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs md:text-base max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  even i am facing
                </span>
              </div>
            </div>
            <img
              // src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function MessageInput() {
  return (
    <div className="flex items-center justify-center w-full h-[10%] ">
      <div className="bg-gray-50 w-[95%] lg:w-[97%] border  border-gray-300 text-gray-900 text-sm rounded-3xl  flex items-center justify-around  p-0  lg:p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
        <div className="w-[5%] shrink-0">
          <CiFaceSmile className="hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-8 xl:h-8 lg:w-7 lg:h-7 w-7 h-7   text-slate-400" />
        </div>
        <div className="md:w-[90%] w-[70%]">
          <input
            type="text"
            className="w-full p-1 md:p-2 text-lg dark:bg-gray-700 outline-none border-none"
            placeholder="Message"
          />
        </div>
        <div>
          <button className="text-blue-500 hover:text-slate-300 w-[5%] p-2 text-xl">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
