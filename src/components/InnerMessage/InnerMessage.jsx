import React, { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
import InnerHeader from "../common/InnerHeader";
import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../../data/Data";
import Loader from "../common/Loader/Loader";

export default function InnerMessage() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const users = Users();
  useEffect(() => {
    const selectedUser = users.find((item) => item.id == id);
    setUser(selectedUser);
  }, [id]);
  const [item, setItem] = useState({
    id: 2,

    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });
  return (
    <>
      <div className="flex flex-col relative  w-full h-screen md:h-full justify-end">
        <InnerHeader direction item={user} />
        <InnerMessages user={user} />
        <MessageInput />
      </div>
    </>
  );
}

function InnerMessages({ user }) {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      console.log("jgjcfh");
    }
  }, [messagesEndRef, user]);
  return (
    <>
      {user ? (
        <div
          ref={messagesEndRef}
          className="h-[93%] overflow-y-auto scrollbar-none bg-slate-400 dark:bg-slate-900 p-2"
        >
          <div id="messages" className="flex flex-col  space-y-4  ">
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-2 items-start">
                  <div className="">
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:text-base">
                      Can be verified on any platform using docker
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="My profile"
                  className="cursor-pointer hover:opacity-80 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:text-base ">
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/profile/posts`)}
                  src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=avif,webp&format=jpg&width=950"
                  alt="My profile"
                  className="cursor-pointer hover:opacity-800 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      Command was run with root privileges. I'm sure about that.
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      I've update the description so it's more obviously now
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      FYI https://askubuntu.com/a/700266/510172
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:text-base">
                      Check the line above (it ends with a # so, I'm running it
                      as root )<pre># npm install -g @vue/devtools</pre>
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="My profile"
                  className="cursor-pointer hover:opacity-80 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:text-base ">
                      Any updates on this issue? I'm getting the same error when
                      trying to install devtools. Thanks
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/profile/posts`)}
                  src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=avif,webp&format=jpg&width=950"
                  alt="My profile"
                  className="cursor-pointer hover:opacity-800 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:text-base">
                      Thanks for your message David. I thought I'm alone with
                      this issue. Please, ? the issue to support it{" "}
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="My profile"
                  className="cursor-pointer hover:opacity-80 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-blue-600 text-white md:text-base ">
                      Are you using sudo?
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:text-base ">
                      Run this command sudo chown -R `whoami` /Users/
                      {/* {{ your_user_profile }}/.npm-global/ then install the package */}
                      globally without using sudo
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/profile/posts`)}
                  src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=avif,webp&format=jpg&width=950"
                  alt="My profile"
                  className="cursor-pointer hover:opacity-800 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      It seems like you are from Mac OS world. There is no
                      /Users/ folder on linux ?
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:text-base">
                      I have no issue with any other packages installed with
                      root permission globally.
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="My profile"
                  className="cursor-pointer hover:opacity-80 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-1"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:text-base ">
                      yes, I have a mac. I never had issues with root permission
                      as well, but this helped me to solve the problem
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/profile/posts`)}
                  src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=avif,webp&format=jpg&width=950"
                  alt="My profile"
                  className="cursor-pointer hover:opacity-800 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-2"
                />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-smtext-base max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      I get the same error on Arch Linux (also with sudo)
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block bg-gray-300 text-gray-600 md:text-base">
                      I also have this issue, Here is what I was doing until
                      now: #1076
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="relative px-4 pt-2 pb-5 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:text-base">
                      even i am facing
                      <span className="absolute bottom-0 right-0 p-1 text-xs">
                        11:12 AM
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => navigate(`/user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="My profile"
                  className="cursor-pointer hover:opacity-80 w-10 h-10 md:w-12 md:h-12 rounded-full object-cover order-1"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
function MessageInput() {
  return (
    <div className="flex bg-gray-50 dark:bg-slate-950 items-center justify-center w-full h-[7%]">
      <div className=" w-full self-center borde  border-gray-300 text-gray-900 text-sm  flex items-center justify-center p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white md:text-base ">
        <div className=" shrink-0">
          <CiFaceSmile className="hover:text-slate-600 cursor-pointer lg:w-7 lg:h-7 w-7 h-7 text-slate-400" />
        </div>
        <div className="sm:w-[94%] w-[80%]">
          <input
            type="text"
            className="w-full p-2 text-lg dark:bg-slate-950 outline-none border-none"
            placeholder="Message"
          />
        </div>
        <div>
          <button className="text-slate-300 hover:text-blue-300  p-2 text-xl">
            <LuSendHorizonal className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
