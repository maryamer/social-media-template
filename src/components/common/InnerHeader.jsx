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
      className="messageHeader dark:bg-slate-950  top-0 right-0 left-0   flex justify-between items-center h-[7%]
       "
    >
      <div className="flex items-center justify-start hover:text-slate-400">
        <button
          onClick={() => {
            setIsSettingOpen(false);
            navigate(direction || -1);
          }}
          className="flex w-full ml-2.5 text-slate-400"
        >
          <TiArrowBackOutline
            className="hover:text-slate-600 cursor-pointers p-1 w-8 h-8
          "
          />
          <span className="self-center font-bold">Back</span>
        </button>
        &nbsp; &nbsp;
        <CharaterName item={user} />
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
