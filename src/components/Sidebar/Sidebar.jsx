import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { title: "Home", id: 1, direction: "/" },
    { title: "Search", id: 2, direction: "/" },
    { title: "Explore", id: 3, direction: "/" },
    { title: "Messages", id: 4, direction: "/" },
    { title: "Notfications", id: 5, direction: "/" },
    { title: "Create", id: 6, direction: "/" },
    { title: "Profile", id: 7, direction: "/" },
  ];
  return (
    <div className="sidebar h-14 w-full md:h-full md:w-1/6">
      <div className="userInfo"></div>
      <div className="sidebarMenu">
        <div className="sidebarList">
          {menuItems.map((item) => (
            <MenuItem
              title={item.title}
              direction={item.direction}
              key={item.id}
            />
          ))}
        </div>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

function MenuItem({ title, direction = "" }) {
  return (
    <div className="sidebarListItem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>

      <span className="sidebarListItemText">{title}</span>
    </div>
  );
}
