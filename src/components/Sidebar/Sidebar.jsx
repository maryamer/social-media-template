import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar w-full md:h-full md:w-1/6 dark:bg-black bg-white  dark:text-white text-black  md:relative fixed">
      <Logo />
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
function Logo() {
  return (
    <div className="userInfo  hidden md:flex ">
      <span className="sidebarListItem flex md:py-5 md:pl-5 md:pr-1 font-bold">
        <BsPerson className="w-8 h-8" />
      </span>
      <span className="sidebarListItemText items-center hidden md:flex font-bold">
        Maryam Ebrahimi
      </span>
    </div>
  );
}

function SidebarMenu() {
  const menuItems = [
    { title: "Home", id: 1, direction: "/" },
    { title: "Search", id: 2, direction: "/" },
    { title: "Explore", id: 3, direction: "/" },
    { title: "Messages", id: 4, direction: "/" },
    { title: "Notifications", id: 5, direction: "/" },
    { title: "Create", id: 6, direction: "/" },
    { title: "Profile", id: 7, direction: "/" },
  ];
  return (
    <div className="sidebarMenu md:h-3/5  flex-col  ">
      <div className="sidebarList overflow-hidden h-14 md:h-full flex md:flex-col justify-around items-center md:items-start ">
        {menuItems.map((item) => (
          <SidebarMenuMenuItem
            title={item.title}
            direction={item.direction}
            key={item.id}
          />
        ))}
      </div>
      <div className="sidebarListItemText items-center hidden md:flex font-bold absolute bottom-0 w-full ">
        <div className="sidebarListItem flex md:p-5 font-bold">
          <AiOutlineMenu className="w-8 h-8  " />
        </div>
        More
      </div>
    </div>
  );
}

function SidebarMenuMenuItem({ title, direction = "" }) {
  return (
    <div className="sidebarListItem flex md:p-5 font-bold">
      {title == "Home" ? (
        <AiOutlineHome className="w-8 h-8 " />
      ) : title === "Search" ? (
        <AiOutlineSearch className="w-8 h-8 " />
      ) : title === "Explore" ? (
        <MdOutlineExplore className="w-8 h-8 " />
      ) : title === "Messages" ? (
        <AiOutlineMessage className="w-8 h-8 " />
      ) : title === "Notifications" ? (
        <AiOutlineHeart className="w-8 h-8 " />
      ) : title === "Create" ? (
        <AiOutlinePlusCircle className="w-8 h-8 " />
      ) : (
        <BsPerson className="w-8 h-8 " />
      )}

      <span className="sidebarListItemText items-center hidden md:flex font-bold ">
        &nbsp;&nbsp;{title}
      </span>
    </div>
  );
}
