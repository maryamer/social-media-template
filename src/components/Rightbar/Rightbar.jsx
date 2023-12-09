import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../../features/users/usersSlice";
import Character from "../common/Character";
import HeaderTitle from "../common/HeaderTitle";
import { Users } from "../../data/Data";
import Loader from "../common/Loader/Loader";

function Rightbar() {
  // const {
  //   users,
  //   loading: isLoading,
  //   error,
  // } = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncUsers());
  // }, []);
  const users = Users();
  return (
    <>
      {users ? (
        <div className="rightbar border border-r border-slate-400 dark:border-none bg-slate-300 dark:bg-slate-900 dark:text-white md:w-2/6 hidden lg:flex flex-col h-screen justify-center items-center min-w-fit">
          <div className="characters-list flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll scrollbar-none ">
            <div className=" flex  w-[90%] relative top-0 h-20">
              <HeaderTitle title="Suggestions :" />
            </div>
            <div className="w-[95%] h-[95%] ">
              {users &&
                users.map((item) => (
                  <Character isInRightbar={true} key={item.id} item={item}>
                    <AiOutlineEye className="dark:hover:text-slate-600 cursor-pointer xl:mr-2.5 lg:mr-1.5 xl:w-6 xl:h-6 lg:w-5 lg:h-5 transition duration-150 ease-in-out dark:text-slate-300 hover:text-slate-400  text-slate-500" />
                  </Character>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Rightbar;
