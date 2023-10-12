import React from "react";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

function Home() {
  return (
    <div className="flex lg:w-5/6">
      <Feed />
      <Rightbar />
    </div>
  );
}

export default Home;
