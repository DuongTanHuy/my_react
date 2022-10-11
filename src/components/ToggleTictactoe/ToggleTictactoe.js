import React, { useState } from "react";
import Game from "../tictactoe/Game";
import Toggle from "../toggle/Toggle";

const ToggleTictactoe = () => {
  const [message, setMessage] = useState("");

  const callbackFunction = (childData) => {
    setMessage(childData);
  };

  return (
    <div className="w-full">
      <div className="mx-auto">
        <Toggle func={callbackFunction}></Toggle>
        <Game isActive={message}></Game>
      </div>
    </div>
  );
};

export default ToggleTictactoe;
