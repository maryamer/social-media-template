import { Link } from "react-router-dom";
import CharacterInfo from "./CharacterInfo";
import CharaterName from "./CharaterName";

export default function Character({ item, children, locationParameter }) {
  return (
    <Link
      to={locationParameter}
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
