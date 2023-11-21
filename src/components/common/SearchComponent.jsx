import { AiOutlineSearch } from "react-icons/ai";

export default function SearchComponent({ title }) {
  return (
    <div
      className={`searchComponent m-2 h-14 flex items-center relative w-11/12`}
    >
      <div>
        <AiOutlineSearch className="w-6 h-6 self-center dark:text-gray-500 text-slate-500 font-bold" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full font-semibold outline-none p-3  text-sm text-gray-00  border-gray-300 rounded-xl bg-gray-50 focus:ring-slate-300 focus:border-slate-300 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300"
        placeholder="Search..."
      />
    </div>
  );
}
