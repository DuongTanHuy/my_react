import React, { useState } from "react";
import Game from "../tictactoe/Game";
import Toggle from "../toggle/Toggle";

const ToggleTictactoe = () => {
  const [message, setMessage] = useState(false);

  // const callbackFunction = (childData) => {
  //   setMessage(childData);
  // };

  return (
    <div className="w-full">
      <div className="mx-auto" onClick={() => setMessage(!message)}>
        <Toggle></Toggle>
        {<Game isActive={message}></Game>}
        {console.log(message)}
      </div>
    </div>
  );
};

export default ToggleTictactoe;
