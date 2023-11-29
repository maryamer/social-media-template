import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ children, menuItems, isSidebar = true }) {
  return (
    <div
      className={`${
        isSidebar ? "flex flex-col" : "flex"
      }  md:h-2/3 w-full cursor-pointer `}
    >
      <div
        className={`overflow-hidden  md:h-full flex  justify-around items-center  w-full  ${
          isSidebar ? "md:flex-col items-start" : ""
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
