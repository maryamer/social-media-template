import { AiOutlineSearch } from "react-icons/ai";

export default function SearchComponent({ title }) {
  return (
    <div className={`searchComponent h-14 flex items-center relative w-full`}>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3 pointer-events-none">
        <AiOutlineSearch className="w-5 h-5 self-center dark:text-gray-500 text-gray-800" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full outline-none p-3 pl-10 text-sm text-gray-00  border-gray-300 rounded-xl bg-gray-50 focus:ring-slate-300 focus:border-slate-300 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300"
        placeholder="Search..."
      />
    </div>
  );
}
