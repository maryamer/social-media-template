import React from "react";

export default function CharaterName({ item }) {
  return (
    <h3 className="name whitespace-nowrap font-medium xl:text-lg xl:font-medium cursor-pointer min-w-fit dark:text-slate-300">
      <div>{item.username}</div>
    </h3>
  );
}
