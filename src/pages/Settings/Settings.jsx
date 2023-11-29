import { useState } from "react";
import { Outlet } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import SearchComponent from "../../components/common/SearchComponent";
import Menu from "../../components/common/Menu";
import { SettingMenuItems } from "../../data/Data";

export default function Settings() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [item, setItem] = useState({
    id: 2,
    profilePicture:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    username: "Janell Shrum",
    status: "how's the wheater out there?",
  });
  const settingsMenuItems = SettingMenuItems();

  return (
    <div className=" mx-auto w-full bg-slate-300 dark:bg-slate-950 border dark:border-slate-800 dark:text-white md:w-4/6 h-screen overflow-y-scroll scrollbar-none">
      <div className="px-3 py-2 ">
        <InnerHeader
          setIsSettingOpen={setIsSettingOpen}
          item={item}
          direction="/profile"
        />
        <SearchComponent />
        <Menu menuItems={settingsMenuItems} isSidebar={false} />
      </div>
      <Outlet />
    </div>
  );
}
