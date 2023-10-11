import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { PiBell } from "react-icons/pi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import SearchComponent from "../../components/common/SearchComponent";
import { CiLogout } from "react-icons/ci";

export default function Settings() {
  const navigate = useNavigate();
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [item, setItem] = useState({
    id: 2,
    profilePicture:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });

  return (
    <div className=" mx-auto bg-slate-950 text-white w-full h-screen overflow-y-scroll scrollbar-none">
      <div className="px-3 py-2 ">
        <InnerHeader setIsSettingOpen={setIsSettingOpen} item={item} />
        <SearchComponent />
        <SidebarMenu />
      </div>
      <Outlet />
    </div>
  );
}

function SidebarMenu({ children }) {
  const menuItems = [
    { title: "Profile", id: 1, direction: "profile" },
    { title: "Notifications", id: 2, direction: "notifications" },
    { title: "Privacy", id: 3, direction: "privacy" },
    { title: "Log Out", id: 4, direction: "logOut" },
  ];
  return (
    <div className="sidebarMenu h-14 md:h-3/5 flex items-center justify-between w-full cursor-pointer md:mx-2">
      <div className="sidebarList overflow-hidden h-14 md:h-full flex  justify-between items-cente w-full  ">
        {menuItems.map((item) => (
          <SidebarMenuMenuItem
            title={item.title}
            direction={item.direction}
            key={item.id}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
function SidebarMenuMenuItem({ title, direction = "" }) {
  return (
    <NavLink
      to={direction}
      className={` sidebarListItem  flex justify-center  border-b-0  md:p-3  font-bold  md:w-full  lg:hover:border-b-2 hover:border-b-gray-400 transition duration-250 ease-in-out`}
    >
      {title == "Privacy" ? (
        <BiLock className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Search" ? (
        <AiOutlineSearch className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Notifications" ? (
        <PiBell className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Profile" ? (
        <BsPerson className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : (
        <CiLogout className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      )}

      <span className="sidebarListItemText whitespace-nowrap  text-sm xl:text-base items-center hidden lg:flex xl:font-bold ">
        &nbsp;&nbsp;&nbsp;&nbsp;{title}
      </span>
    </NavLink>
  );
}
