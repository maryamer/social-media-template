import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CharaterName from "./CharaterName";
import { TiArrowBackOutline } from "react-icons/ti";

export default function InnerHeader({
  setIsSettingOpen,
  children,
  user = "",
  direction,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="messageHeader dark:border-b border-b-slate-500 flex   justify-between items-center h-[10%]
       "
    >
      <div className="flex items-center justify-start hover:text-slate-400">
        <button
          to="/messages"
          onClick={() => {
            setIsSettingOpen(false);
            navigate(direction || -1);
          }}
          className="flex mx-1 xl:mx-2 "
        >
          <TiArrowBackOutline
            className="hover:text-slate-600 cursor-pointers p-1 w-8 h-8
           text-slate-500"
          />
          <span>Back</span>
        </button>
        &nbsp; &nbsp;
        <CharaterName item={user} />
      </div>
      {children}
    </div>
  );
}
