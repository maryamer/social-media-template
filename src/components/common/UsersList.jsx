import { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAsyncUsers } from "../../features/users/usersSlice";
import useFetch from "../../hooks/useFetch";
import Character from "./Character";
import HeaderTitle from "./HeaderTitle";
import SearchComponent from "./SearchComponent";

export default function UsersList({
  setIsSettingOpen,
  children,
  title = "",
  locationParameter,
}) {
  const {
    users,
    loading: isLoading,
    error,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, []);
  const navigate = useNavigate();
  return (
    <div className="UsersList absolute right-0 top-0  sm:static  w-full md:w-4/6 h-screen  dark:text-white  flex flex-col h-screen justify-center items-center min-w-fit">
      <button
        onClick={() => {
          setIsSettingOpen(false);
          navigate("/");
        }}
        className="flex w-full ml-2.5 text-slate-400"
      >
        <TiArrowBackOutline
          className="hover:text-slate-600 cursor-pointers p-1 w-8 h-8
          "
        />
        <span className="self-center font-bold">Back</span>
      </button>
      <SearchComponent title={title} />
      <div className="characters-list overflow-x-hidden flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll scrollbar-none ">
        {/* {title && <HeaderTitle title={title} />} */}
        <div className="w-full h-full lg:h-[95%] ">
          {users ? (
            users.map((item) => (
              <Character
                key={item.id}
                item={item}
                locationParameter={locationParameter}
                isLoading={isLoading}
              >
                {children}
              </Character>
            ))
          ) : (
            <Character isLoading={false} />
          )}
        </div>
      </div>
    </div>
  );
}
