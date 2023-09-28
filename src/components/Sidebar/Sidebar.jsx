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
    <div className="sidebar  w-full md:h-full md:w-1/6 dark:bg-black  md:relative fixed">
      <div className="userInfo  hidden md:flex  dark:bg-black ">
        <span className="sidebarListItem flex md:py-5 md:pl-5 md:pr-1 font-bold">
          <BsPerson className="w-8 h-8 dark:text-white " />
        </span>
        <span className="sidebarListItemText items-center hidden md:flex font-bold dark:text-white">
          Maryam Ebrahimi
        </span>
      </div>
      <div className="sidebarMenu md:h-3/5  flex-col  dark:bg-black ">
        <div className="sidebarList overflow-hidden h-14 md:h-full flex md:flex-col justify-around items-center md:items-start ">
          {menuItems.map((item) => (
            <MenuItem
              title={item.title}
              direction={item.direction}
              key={item.id}
            />
          ))}
        </div>
        <div className="sidebarListItemText items-center hidden md:flex font-bold absolute bottom-0 w-full  bg-black dark:text-white">
          <div className="sidebarListItem flex md:p-5 font-bold">
            <AiOutlineMenu className="w-8 h-8 dark:text-white " />
          </div>
          More
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

function MenuItem({ title, direction = "" }) {
  return (
    <div className="sidebarListItem flex md:p-5 font-bold">
      {title == "Home" ? (
        <AiOutlineHome className="w-8 h-8 dark:text-white" />
      ) : title === "Search" ? (
        <AiOutlineSearch className="w-8 h-8 dark:text-white" />
      ) : title === "Explore" ? (
        <MdOutlineExplore className="w-8 h-8 dark:text-white" />
      ) : title === "Messages" ? (
        <AiOutlineMessage className="w-8 h-8 dark:text-white" />
      ) : title === "Notifications" ? (
        <AiOutlineHeart className="w-8 h-8 dark:text-white" />
      ) : title === "Create" ? (
        <AiOutlinePlusCircle className="w-8 h-8 dark:text-white" />
      ) : (
        <BsPerson className="w-8 h-8 dark:text-white" />
      )}

      <span className="sidebarListItemText items-center hidden md:flex font-bold dark:text-white">
        &nbsp;&nbsp;{title}
      </span>
    </div>
  );
}
