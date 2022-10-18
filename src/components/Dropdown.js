import React from "react";
import useClickOutside from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { domRef: dropdown1, setShow, show } = useClickOutside(); // khong can theo thu tu

  return (
    <div className="relative w-full max-w-[400px] p-5" ref={dropdown1}>
      <div
        className="p-5 border border-black rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="p-5 border border-black rounded-lg absolute top-[calc(100%-20px)] left-[20px] w-[calc(100%-40px)]">
          <div className="cursor-pointer py-3 border-b border-b-blue-400">
            JavaScrip
          </div>
          <div className="cursor-pointer py-3 border-b border-b-blue-400">
            ReactJS
          </div>
          <div className="cursor-pointer py-3">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
