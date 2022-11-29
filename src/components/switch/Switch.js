import React from "react";
import styled from "styled-components";

const ToggleStyles = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const Switch = (props) => {
  const { on, onClick, ...rest } = props;
  return (
    <label>
      <ToggleStyles type="checkbox" checked={on} onClick={onClick} />
      <div
        className={`inline-block w-[100px] h-[52px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-purple-500" : "bg-gray-300"
        }`}
        {...rest}
      >
        <span
          className={`transition-all w-11 h-11 bg-white rounded-full inline-block ${
            on ? "translate-x-[48px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};

export default Switch;
