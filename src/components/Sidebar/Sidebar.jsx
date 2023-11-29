import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import MenuItem from "../common/MenuItem";
import Menu from "../common/Menu";
import useFetch from "../../hooks/useFetch";
import {
  SideBarMenuItems,
  SideBarSubMenuItems,
  AccountUser,
} from "../../data/Data";

function Sidebar() {
  const { pathname } = useLocation();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const subMenuRef = useRef();
  useOutsideClick(subMenuRef, "moreOptions", () => setIsOpenSubMenu(false));
  const menuItems = SideBarMenuItems();
  const subMenuItems = SideBarSubMenuItems();
  return (
    <>
      {!pathname.includes("messages") &&
        !pathname.includes("search") &&
        !pathname.includes("followers") &&
        !pathname.includes("following") && (
          <div className="h-fit md:h-screen lg:w-1/6 md:w-fit flex flex-col justify-between rounded-3xl md:rounded-l-none md:rounded-tl-none md:rounded-r-3xl  dark:bg-slate-900 bg-slate-300  ">
            <div
              className={`sidebar p-2 z-50 flex flex-col items-start bottom-0 right-0 left-0 transition-all duration-150 w-full ease-in-out md:h-full  lg:max-w-none md:max-w-fit dark:text-white text-gray-800  md:relative absoolute`}
            >
              <SideBarHeader />
              <Menu menuItems={menuItems}>
                {isOpenSubMenu && (
                  <div
                    ref={subMenuRef}
                    className="subMenuContainer bg-slate-400 dark:bg-slate-900  rounded-xl hidden lg:flex items-center  flex-col p-3 max-h-fit w-[95%] absolute bottom-1"
                  >
                    <Submenu menuItems={subMenuItems} />
                  </div>
                )}
              </Menu>
            </div>
            <div className="md:p-2 w-full hidden md:flex">
              <LastMenuItem setIsOpenSubMenu={setIsOpenSubMenu} />
            </div>
          </div>
        )}
    </>
  );
}

export default Sidebar;

function LastMenuItem({ setIsOpenSubMenu }) {
  return (
    <div
      id="moreOptions"
      onClick={() => setIsOpenSubMenu((prev) => !prev)}
      className="sidebarListItem hidden md:flex justify-center md:justify-normal lg:p-1 text-gray-800 dark:text-gray-200 font-bold   rounded-2xl hover:bg-gray-400 hover:text-gray-200 w-full dark:md:hover:bg-slate-800 transition duration-150 ease-in-out cursor-pointer "
    >
      <AiOutlineMenu className="lg:w-9 lg:h-9 w-7 h-7 " />
      <span className="sidebarListItemText text-lg items-center hidden lg:flex font-bold ">
        &nbsp;&nbsp;&nbsp;&nbsp;More
      </span>
    </div>
  );
}
function SideBarHeader() {
  // const { isLoading, data: user } = useFetch(
  //   "http://localhost:5000/accountUser"
  // );
  const user = AccountUser();
  return (
    <Link
      to="/profile/posts"
      className="userInfo hidden my-2  xl:flex cursor-pointer hover:opacity-70 hover:text-gray-400 transition duration-150 ease-in-out"
    >
      <span className="sidebarListItem flex font-bold ">
        <div className="flex items-center xl:justify-around lg:justify-start">
          <img
            className="shareProfileImg cursor-pointer object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full shadow-2xl "
            src={user.profilePicture}
            alt=""
          />
          &nbsp;&nbsp;
        </div>
        <span className="flex flex-col justify-center">
          <span className="sidebarListItemText  whitespace-nowrap flex md:font-medium lg:font-normal text-sm lg:text-base  xl:font-semibold ">
            Maryam Ebrahimi
          </span>
          <span className="sidebarListItemText  whitespace-nowrap flex md:font-medium lg:font-normal text-sm lg:text-base  text-gray-400">
            {user && user.username}
          </span>
        </span>
      </span>
    </Link>
  );
}
function Submenu({ menuItems }) {
  return (
    <>
      {menuItems.map(({ direction, title, id }) => (
        <MenuItem
          title={title}
          direction={direction}
          key={id}
          isSidebar={true}
        />
      ))}
    </>
  );
}
