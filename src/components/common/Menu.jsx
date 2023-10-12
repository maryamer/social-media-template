import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ children, menuItems, isSidebar = true }) {
  return (
    <div
      className={`${
        isSidebar ? "flex-col" : "flex"
      } h-14 md:h-3/5  cursor-pointer md:mx-2`}
    >
      <div
        className={`overflow-hidden h-14 md:h-full flex  justify-around items-center  w-full  ${
          isSidebar ? "md:flex-col md:items-start" : ""
        } `}
      >
        {menuItems &&
          menuItems.map((item) => (
            <MenuItem
              title={item.title}
              direction={item.direction}
              key={item.id}
              isSidebar={isSidebar}
            />
          ))}
      </div>
      {children}
    </div>
  );
}
