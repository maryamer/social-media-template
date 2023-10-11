import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import Settings from "./pages/Settings/Settings";

function App() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <div className="app flex flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-full">
      <Sidebar />
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
              <div className="flex flex-col w-full items-center justify-center font-bold">
                <BsFillChatDotsFill className="w-16 h-16 p-3" />
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
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
