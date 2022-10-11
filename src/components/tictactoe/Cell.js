import React from "react";

const Cell = ({ value, onClick }) => {
  // const { value, onClick } = props;
  // console.log(value, onClick);
  return (
    <div className={`game-cell is-${value}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
