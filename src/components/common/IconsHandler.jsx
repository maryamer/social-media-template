import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { PiBell } from "react-icons/pi";
import { CgDarkMode } from "react-icons/cg";

export default function IconsHandler({ title }) {
  return (
    <>
      {title == "Privacy" ? (
        <BiLock className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Search" ? (
        <AiOutlineSearch className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Notifications" ? (
        <PiBell className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Profile" ? (
        <BsPerson className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "LogOut" || title === "Log Out" ? (
        <CiLogout className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Home" ? (
        <AiOutlineHome className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Explore" ? (
        <MdOutlineExplore className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Messages" ? (
        <AiOutlineMessage className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Create" ? (
        <AiOutlinePlusCircle className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Settings" ? (
        <IoMdSettings className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : title === "Swith Account" ? (
        <AiOutlineUserSwitch className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      ) : (
        <CgDarkMode className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      )}
    </>
  );
}
