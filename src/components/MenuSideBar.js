import React from "react";
import useClickOutside from "../hooks/useClickOutSide";
import SideBarMenu from "./SideBarMenu";

const MenuSideBar = () => {
  const { domRef, show } = useClickOutside(true, "button");
  return (
    <div>
      <button
        className={`inline-block m-3 p-3 rounded-lg text-white bg-green-400 ${
          !show && "hidden"
        }`}
      >
        Show menu
      </button>
      <SideBarMenu show={show} ref={domRef}></SideBarMenu>
    </div>
  );
};

export default MenuSideBar;
