import React from "react";
import UsersList from "../../components/common/UsersList";

export default function Search() {
  return (
    <div className="share bg-slate-950 lg:py-3   justify-center w-full md:w-5/6">
      <UsersList locationParameter="/profile" />
    </div>
  );
}

// function SearchUserInput() {
//   return (
//     <div className="flex items-center justify-center w-full h-[10%] ">
//       <div className="bg-gray-50 w-[95%] lg:w-[98%] border  border-gray-300 text-gray-900 text-sm rounded-3xl  flex items-center   p-0 justify-between lg:p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
//         <div className="flex items-center">
//           <AiOutlineSearch className="hover:text-slate-600 cursor-pointer  xl:w-8 xl:h-8 lg:w-7 lg:h-7 w-7 h-7   text-slate-400" />
//         </div>
//         <div className=" w-full">
//           <input
//             type="text"
//             className="w-full p-1 md:p-2 text-lg dark:bg-gray-700 outline-none border-none"
//             placeholder="Search"
//           />
//         </div>
//         <div>
//           <button className=" w-[5%] p-2 text-xl cursor-pointer">
//             <AiOutlineClose className="hover:text-slate-300 cursor-pointer  xl:w-8 xl:h-8 lg:w-7 lg:h-7 w-7 h-7   text-slate-500" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
