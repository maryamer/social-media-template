import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Users } from "../../dummyData";
import Character from "./Character";
import HeaderTitle from "./HeaderTitle";
import SearchComponent from "./SearchComponent";

export default function UsersList({
  setIsSettingOpen,
  children,
  title = "",
  locationParameter,
}) {
  const navigate = useNavigate();
  return (
    <div className="UsersList md:w-4/6 w-full dark:text-white  flex flex-col h-screen justify-center items-center min-w-fit">
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
        {title && <HeaderTitle title={title} />}
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
