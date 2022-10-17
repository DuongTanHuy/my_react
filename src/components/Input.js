import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => inputRef.current.focus(), []);

  //   console.log(divRef.current); -> undefined vi dang loading

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input..."
        className="m-3 border border-gray-200 p-5 focus:border-green-400"
      />
    </div>
  );
};

export default Input;
