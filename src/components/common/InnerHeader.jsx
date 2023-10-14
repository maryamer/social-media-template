import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CharaterName from "./CharaterName";

export default function InnerHeader({ item, setIsSettingOpen, children }) {
  const navigate = useNavigate();
  return (
    <div
      className="messageHeader border-b border-b-slate-500 flex   justify-between items-center h-[10%]
        py-3"
    >
      <div className="flex items-center justify-start hover:text-slate-400">
        <button
          to="/messages"
          onClick={() => {
            setIsSettingOpen(false);
            navigate(-1);
          }}
          className="flex mx-1 xl:mx-2 "
        >
          <IoIosArrowRoundBack
            className="hover:text-slate-600 cursor-pointers w-10 h-10 lg:w-12 lg:h-12
             text-slate-400"
          />
        </button>
        &nbsp; &nbsp;
        <CharaterName item={item} />
      </div>
      {children}
    </div>
  );
}