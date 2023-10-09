import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ChatPage from "./components/ChatPage/ChatPage";
import Feed from "./components/Feed/Feed";
import InnerMessage from "./components/InnerMessage/InnerMessage";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/home/Home";
import Messages from "./pages/Messsages/Messages";
import Profile from "./pages/Profile/Profile";

function App() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <div className="app flex flex-col-reverse md:flex-row h-screen  dark:bg-slate-950 w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/messages"
          element={
            <Messages
              isSettingOpen={isSettingOpen}
              setIsSettingOpen={setIsSettingOpen}
            />
          }
        >
          <Route index element={<div>inner Message</div>} />
          <Route
            path=":id"
            element={<InnerMessage setIsSettingOpen={setIsSettingOpen} />}
          />
        </Route>
        {/* <Feed />
        <Rightbar /> */}
      </Routes>
    </div>
  );
}

export default App;
