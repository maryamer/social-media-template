import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import SearchComponent from "../../components/common/SearchComponent";
import Menu from "../../components/common/Menu";

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
  const settingsMenuItems = [
    { title: "Profile", id: 1, direction: "profile" },
    { title: "Notifications", id: 2, direction: "notifications" },
    { title: "Privacy", id: 3, direction: "privacy" },
    { title: "Log Out", id: 4, direction: "logOut" },
  ];

  return (
    <div className=" mx-auto bg-slate-950 text-white w-5/6 h-screen overflow-y-scroll scrollbar-none">
      <div className="px-3 py-2 ">
        <InnerHeader setIsSettingOpen={setIsSettingOpen} item={item} />
        <SearchComponent />
        <Menu menuItems={settingsMenuItems} isSidebar={false} />
      </div>
      <Outlet />
    </div>
  );
}
