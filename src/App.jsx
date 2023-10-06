import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="app flex flex-col-reverse md:flex-row h-screen  dark:bg-slate-950">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Feed />
        <Rightbar /> */}
      </Routes>
    </div>
  );
}

export default App;
