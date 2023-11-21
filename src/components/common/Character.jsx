import { Link } from "react-router-dom";
import CharacterInfo from "./CharacterInfo";
import CharaterName from "./CharaterName";

export default function Character({
  item,
  children,
  locationParameter,
  isInRightbar = false,
  isLoading,
}) {
  return (
    <>
      <Link
        to={locationParameter}
        className={`${
          isInRightbar
            ? "rounded-2xl hover:border border-slate-500"
            : " rounded-lg hover:bg-slate-300"
        }  flex w-screen lg:w-full justify-around items-center min-w-fit  lg:grid-cols-3 bg-slate-100 hover:opacity-95 dark:bg-slate-950 my-2 dark:hover:bg-slate-800  cursor-pointer h-16 lg:h-22`}
      >
        <div className="flex items-center  lg:justify-start  pl-2 w-4/5 overflow-hidden ">
          <img
            src={item?.image}
            alt={item?.name}
            className="shareProfileImg cursor-pointer object-cover flex items-center  shrink-0 grow-0 xl:w-18 xl:h-18  w-14 h-14 rounded-full"
          />
          &nbsp; &nbsp;
          <div className="">
            <CharaterName item={item} />
            <span className="text-gray-500 text-sm">Hello maryam?</span>
            {/* <CharacterInfo item={item} /> */}
          </div>
        </div>
        {children}
      </Link>
    </>
  );
}
