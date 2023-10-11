import React from "react";
import { Users } from "../../dummyData";
import { AiOutlineEye } from "react-icons/ai";
import CharaterName from "../common/CharaterName";
import { Character } from "../common/Character";

function Rightbar() {
  return (
    <div className="rightbar dark:bg-slate-900 dark:text-white md:w-2/6 hidden lg:flex flex-col h-screen justify-center items-center min-w-fit">
      <div className="characters-list flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll ">
        <div className=" flex  w-[80%] relative top-0 h-20">
          <h2 className="font-bold pl-2 flex items-center text-gray-400  ">
            Suggesting:
          </h2>
        </div>
        <div className="w-[80%] h-[95%] ">
          {Users.map((item) => (
            <Character key={item.id} item={item}>
              <AiOutlineEye className="hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out  text-slate-300" />
            </Character>
          ))}
          {Users.map((item) => (
            <Character key={item.id} item={item}>
              <AiOutlineEye className="hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out  text-slate-300" />
            </Character>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;

// export function Character({ item, children }) {
//   return (
//     <div className=" flex justify-between items-center rounded-xl grid-cols-3 dark:bg-slate-950 mb-3 hover:bg-slate-800  transition duration-150 ease-in-out cursor-pointer  w-full h-16">
//       <div className="flex items-center ml-2 justify-start  ">
//         <img
//           src={item.profilePicture}
//           alt={item.username}
//           className="shareProfileImg cursor-pointer object-cover w-12 h-12 rounded-full"
//         />
//         &nbsp; &nbsp;
//         <div>
//           <CharaterName item={item} />
//           <CharacterInfo item={item} />
//           {children}
//         </div>
//       </div>
//       <AiOutlineEye className="hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out  text-slate-300" />
//     </div>
//   );
// }

// function CharacterInfo({ item }) {
//   const status = item.status && item?.status.slice(0, 14);
//   return (
//     <div className="list-item__info info hidden 2xl:block dark:text-slate-300 cursor-pointer">
//       <span className={`status ${item.id === "Dead" ? "red" : ""}`}></span>
//       <span> {status && status.padEnd(17, "..")} </span>
//     </div>
//   );
// }
