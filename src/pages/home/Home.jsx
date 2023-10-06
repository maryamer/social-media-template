import React from "react";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="flex lg:w-5/6">
      <Feed />
      <Rightbar />
    </div>
  );
}

export default Home;
