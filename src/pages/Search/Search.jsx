import React from "react";
import UsersList from "../../components/common/UsersList";

export default function Search() {
  return (
    <div className="share dark:bg-slate-950 lg:py-3   justify-center w-full md:w-5/6">
      <UsersList locationParameter="/profile" />
    </div>
  );
}
