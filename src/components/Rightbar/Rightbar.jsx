import React from "react";
import { Users } from "../../dummyData";

function Rightbar() {
  return (
    <div className="rightbar dark:bg-slate-950 dark:text-white w-2/6 hidden lg:flex flex-col justify-center items-center min-w-fit">
      <h2 className="font-bold p-5 self-center">Suggesting:</h2>
      <div className="characters-list flex flex-col justify-center items-center w-full overflow-y-scroll scrollbar">
        <div className="">
          {Users.map((item) => (
            <Character key={item.id} item={item} />
          ))}
          {Users.map((item) => (
            <Character key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
export function Character({ item, children }) {
  return (
    <div className=" flex items-center p-3 rounded-xl  gap-4 grid-cols-3 dark:bg-slate-900 hover:bg-slate-800 w-full m-2 h-16">
      <img
        src={item.profilePicture}
        alt={item.username}
        className="shareProfileImg cursor-pointer object-cover w-12 h-12 rounded-full"
      />
      <div>
        <CharaterName item={item} />
        <CharacterInfo item={item} />
      </div>
      {children}
    </div>
  );
}

function CharaterName({ item }) {
  return (
    <h3 className="name font-bold">
      <span>{item.username}</span>
    </h3>
  );
}

function CharacterInfo({ item }) {
  const status = item.status && item?.status.slice(0, 17);
  console.log(status);
  return (
    <div className="list-item__info info dark:text-slate-300">
      <span className={`status ${item.id === "Dead" ? "red" : ""}`}></span>
      <span> {status && status.padEnd(20, "..")} </span>
    </div>
  );
}
