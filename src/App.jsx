import "./App.css";
import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import InnerMessage from "./components/InnerMessage/InnerMessage";
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
import Register from "./pages/Register/Register";
import AppLayout from "./layout/AppLayout";
import { Provider } from "react-redux";
import { store } from "./features/store";
import SinglePost from "./components/common/SinglePost";
import ExplorePosts from "./components/ExplorePosts/ExplorePosts";
import { useTheme } from "./context/ThemeContext";
import { useSetting } from "./context/OpenSettingContext";

function App() {
  // const [isSettingOpen, setIsSettingOpen] = useState(false);
  // const [theme, setTheme] = useLocalStorage("theme", "dark");
  // const themeHandler = () => {
  //   setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  //   localStorage.setItem(
  //     "theme",
  //     JSON.stringify(theme === "dark" ? "light" : "dark")
  //   );
  // };

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/explore/:userId/posts/:postId"
              element={<SinglePost />}
            />
            <Route path="/profile" element={<Profile />}>
              <Route path="bookmarks" element={<ExplorePosts />} />
              <Route path="posts" index element={<ExplorePosts />} />
            </Route>
            <Route path="/user/:userId" element={<Profile />}>
              <Route path="bookmarks" element={<ExplorePosts />} />
              <Route path="posts" element={<ExplorePosts />} />
            </Route>
            <Route
              path="/user/:userId/posts/:postId"
              element={<SinglePost />}
            />
            <Route path="/profile/posts/:postId" element={<SinglePost />} />
            <Route
              path="/followers"
              element={
                <UsersList title={"Followers"} locationParameter="/profile" />
              }
            />
            <Route
              path="/following"
              element={
                <UsersList title={"Following"} locationParameter="/profile" />
              }
            />
            <Route path="/profile/settings" element={<Settings />}>
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<ProfileSettings />} />
              <Route path="notifications" element={<NotificationsSetting />} />
              <Route path="privacy" element={<PrivacySettings />} />
            </Route>
            <Route path="/messages" element={<Messages />}>
              <Route
                index
                element={
                  <div className="flex flex-col w-full items-center dark:text-white text-slate-500 justify-center font-bold">
                    <BsFillChatDotsFill className="w-16 h-16 p-3 " />
                    Your Messages
                  </div>
                }
              />
              <Route path=":id" element={<InnerMessage />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
