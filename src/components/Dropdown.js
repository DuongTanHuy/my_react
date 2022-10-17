import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    function handleClickOutDropdown(event) {
      if (dropdown.current && !dropdown.current.contains(event.target))
        setShowDropdown(false);
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => document.removeEventListener("click", handleClickOutDropdown);
  }, []);

  return (
    <div className="relative w-full max-w-[400px] p-5" ref={dropdown}>
      <div
        className="p-5 border border-black rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
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
