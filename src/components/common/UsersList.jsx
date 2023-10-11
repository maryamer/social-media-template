import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../dummyData";
import Character from "./Character";
import SearchComponent from "./SearchComponent";

export default function UsersList({
  setIsSettingOpen,
  children,
  title = "",
  locationParameter,
}) {
  const navigate = useNavigate();
  return (
    <div className="UsersList w-full dark:text-white  flex flex-col h-screen justify-center items-center min-w-fit">
      <button
        onClick={() => {
          setIsSettingOpen(false);
          navigate("/");
        }}
        className="flex w-full xl:ml-2.5"
      >
        <IoIosArrowRoundBack
          className="hover:text-slate-600 cursor-pointers w-12 h-12
           text-slate-400"
        />
      </button>
      <SearchComponent title={title} />
      <div className="characters-list flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll scrollbar-none ">
        {title && (
          <div className="  w-full relative top-0 h-20 hidden lg:flex ">
            <h2 className="font-bold pl-2 flex items-center text-gray-400  ">
              {title}
            </h2>
          </div>
        )}
        <div className="w-full h-full lg:h-[95%] ">
          {Users.map((item) => (
            <Character
              key={item.id}
              item={item}
              locationParameter={locationParameter}
            >
              {children}
            </Character>
          ))}
          {Users.map((item) => (
            <Character
              key={item.id}
              item={item}
              locationParameter={locationParameter}
            >
              {children}
            </Character>
          ))}
        </div>
      </div>
    </div>
  );
}
