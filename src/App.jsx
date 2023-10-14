import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import InnerMessage from "./components/InnerMessage/InnerMessage";
import Sidebar from "./components/Sidebar/Sidebar";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/home/Home";
import Messages from "./pages/Messsages/Messages";
import Profile from "./pages/Profile/Profile";
import { BsFillChatDotsFill } from "react-icons/bs";
import Search from "./pages/Search/Search";
import Notifications from "./pages/Notifications/Notifications";
import UsersList from "./components/common/UsersList";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Settings from "./pages/Settings/Settings";
import NotificationsSetting from "./components/NotificationsSetting/NotificationsSetting";
import PrivacySettings from "./components/PrivacySettings/PrivacySettings";
import Login from "./pages/Login/Login";
import { useEffect } from "react";

function App() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const themeHandler = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("theme") === "dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  return (
    <div className={`${theme}  h-screen w-screen`}>
      <div
        className={`  flex justify-start flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-screen`}
      >
        <Sidebar themeHandler={themeHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/profile/followers"
            element={<UsersList locationParameter="/profile" />}
          />
          <Route
            path="/profile/followings"
            element={<UsersList locationParameter="/profile" />}
          />
          <Route
            path="/messages"
            element={
              <Messages
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
              />
            }
          >
            <Route
              index
              element={
                <div className="flex flex-col w-full items-center dark:text-white text-slate-500 justify-center font-bold">
                  <BsFillChatDotsFill className="w-16 h-16 p-3 " />
                  Your Messages
                </div>
              }
            />
            <Route
              path=":id"
              element={<InnerMessage setIsSettingOpen={setIsSettingOpen} />}
            />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="profile/settings" element={<Settings />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="notifications" element={<NotificationsSetting />} />
            <Route path="privacy" element={<PrivacySettings />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
