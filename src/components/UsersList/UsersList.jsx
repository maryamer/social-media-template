import { AiOutlineEye } from "react-icons/ai";
import { BsBellSlash } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";

export default function UsersList({ setIsSettingOpen, children, title = "" }) {
  return (
    <div className="UsersList w-full dark:text-white  flex flex-col h-screen justify-center items-center min-w-fit">
      <Link
        to="/"
        onClick={() => setIsSettingOpen(false)}
        className="flex w-full xl:ml-2.5 "
      >
        <IoIosArrowRoundBack
          className="hover:text-slate-600 cursor-pointers w-12 h-12
           text-slate-400"
        />
      </Link>
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
            <Character key={item.id} item={item}>
              {children}
            </Character>
          ))}
          {Users.map((item) => (
            <Character key={item.id} item={item}>
              {children}
            </Character>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Character({ item, children }) {
  return (
    <Link
      to="1"
      className="flex  justify-between items-center  lg:grid-cols-3 dark:bg-slate-950 my-2 hover:bg-slate-800  cursor-pointer  w-full h-16 lg:h-24"
    >
      <div className="flex items-center  lg:justify-start justify-center pl-2 ">
        <img
          src={item.profilePicture}
          alt={item.username}
          className="shareProfileImg cursor-pointer object-cover flex items-center ml-1.5 shrink-0 grow-0 xl:w-20 xl:h-20  w-14 h-14 rounded-full"
        />
        &nbsp; &nbsp;
        <div className="">
          <CharaterName item={item} />
          <CharacterInfo item={item} />
        </div>
      </div>
      {children}
    </Link>
  );
}

function CharaterName({ item }) {
  return (
    <h3 className="name whitespace-nowrap font-medium xl:text-lg xl:font-medium cursor-pointer min-w-fit dark:text-slate-300">
      <div>{item.username}</div>
    </h3>
  );
}

function CharacterInfo({ item }) {
  const status = item.status && item?.status.slice(0, 14);
  return (
    <div className="list-item__info info hidden font-thin 2xl:block dark:text-slate-400 cursor-pointer">
      <span className={`status ${item.id === "Dead" ? "red" : ""}`}></span>
      <span> {status && status.padEnd(17, "..")} </span>
    </div>
  );
}
function SearchComponent({ title }) {
  return (
    <div className={`searchComponent h-14 relative w-full`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full outline-none p-3 pl-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-300 focus:border-slate-300 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300"
        placeholder="Search Mockups, Logos..."
      />
    </div>
  );
}
