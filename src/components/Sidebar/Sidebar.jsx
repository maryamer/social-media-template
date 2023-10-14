import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import MenuItem from "../common/MenuItem";
import Menu from "../common/Menu";

function Sidebar({ themeHandler }) {
  const { pathname } = useLocation();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const subMenuRef = useRef();
  useOutsideClick(subMenuRef, () => setIsOpenSubMenu(false));
  const menuItems = [
    { title: "Home", id: 1, direction: "/" },
    { title: "Search", id: 2, direction: "/search" },
    { title: "Explore", id: 3, direction: "/explore" },
    { title: "Messages", id: 4, direction: "/messages" },
    { title: "Notifications", id: 5, direction: "/notifications" },
    { title: "Create", id: 6, direction: "/create" },
    { title: "Profile", id: 7, direction: "/profile" },
    { title: "Dark/Light", id: 8, direction: null },
  ];
  const subMenuItems = [
    { title: "Settings", id: 1, direction: "/profile/settings" },
    { title: "Swith Account", id: 6, direction: "/create" },
    { title: "Log Out", id: 7, direction: "/login" },
  ];
  return (
    <>
      {!pathname.includes("messages") && (
        <div
          className={`sidebar z-50   transition-all duration-150 w-full ease-in-out md:rounded-r-3xl  md:h-full lg:w-1/6 lg:max-w-none md:max-w-fit dark:bg-slate-900 bg-slate-300  dark:text-white text-gray-800  md:relative absoolute`}
        >
          <SideBarHeader />
          <Menu menuItems={menuItems} themeHandler={themeHandler}>
            <LastMenuItem setIsOpenSubMenu={setIsOpenSubMenu} />
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
      )}
    </>
  );
}

export default Sidebar;

function LastMenuItem({ setIsOpenSubMenu }) {
  return (
    <div
      onClick={() => setIsOpenSubMenu(true)}
      className="sidebarListItem hidden md:flex justify-center md:justify-normal md:p-3  font-bold  lg:w-1/7 rounded-2xl hover:bg-gray-400 hover:text-gray-200  dark:md:hover:bg-slate-800 transition duration-150 ease-in-out fixed left-2  bottom-2"
    >
      <AiOutlineMenu className="lg:w-9 lg:h-9 w-7 h-7 " />
      <span className="sidebarListItemText text-lg items-center hidden lg:flex font-bold ">
        &nbsp;&nbsp;&nbsp;&nbsp;More
      </span>
    </div>
  );
}
function SideBarHeader() {
  return (
    <Link
      to="/profile"
      className="userInfo hidden  lg:flex cursor-pointer hover:opacity-70 hover:text-gray-400 transition duration-150 ease-in-out"
    >
      <span className="sidebarListItem flex md:py-5 md:pl-5 xl:pr-1 font-bold ">
        <div className="flex items-center xl:justify-around lg:justify-start">
          <img
            className="shareProfileImg cursor-pointer object-cover w-10 h-10 rounded-full shadow-2xl shadow-white "
            src="/assets/person/1.jpeg"
            alt=""
          />
          &nbsp;&nbsp;
        </div>
      </span>
      <span className="sidebarListItemText  whitespace-nowrap items-center hidden lg:flex md:font-medium lg:font-normal text-sm xl:text-lg  xl:font-bold">
        Maryam Ebrahimi
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
