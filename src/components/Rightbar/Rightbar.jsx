import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import useFetch from "../../hooks/useFetch";
import Character from "../common/Character";
import HeaderTitle from "../common/HeaderTitle";

function Rightbar() {
  const { isLoading, data: users } = useFetch("http://localhost:5000/users");

  return (
    <div className="rightbar bg-slate-300 dark:bg-slate-900 dark:text-white md:w-2/6 hidden lg:flex flex-col h-screen justify-center items-center min-w-fit">
      <div className="characters-list flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll ">
        <div className=" flex  w-[80%] relative top-0 h-20">
          <HeaderTitle title="Suggesting" />
        </div>
        <div className="w-[80%] h-[95%] ">
          {users.map((item) => (
            <Character isInRightbar={true} key={item.id} item={item}>
              <AiOutlineEye className="dark:hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out dark:text-slate-300 hover:text-slate-400  text-slate-500" />
            </Character>
          ))}
          {users.map((item) => (
            <Character isInRightbar={true} key={item.id} item={item}>
              <AiOutlineEye className="dark:hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out dark:text-slate-300  hover:text-slate-400 text-slate-500" />
            </Character>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
