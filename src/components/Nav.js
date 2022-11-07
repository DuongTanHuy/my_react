import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LinkList = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
];

const Nav = () => {
  return (
    <>
      <div className="p-3 bg-white shadow-md flex items-start justify-start gap-x-5 font-semibold">
        {LinkList.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "transition-all border-b-2 border-b-violet-500 p-2"
                : "p-2"
            }
            to={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
