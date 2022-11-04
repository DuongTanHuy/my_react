import React, { useState } from "react";
import Game from "../tictactoe/Game";
import Toggle from "../toggle/Toggle";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ToggleTictactoe = () => {
  const [message, setMessage] = useState(false);

  const handleMessage = () => {
    setMessage(!message);
  };

  // const callbackFunction = (childData) => {
  //   setMessage(childData);
  // };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} className="w-full">
      <div className="mx-auto">
        {/*neu chi ghi setMessage trong onClick se bao loi*/}
        <Toggle handleMessage={handleMessage}></Toggle>
        {<Game isActive={message}></Game>}
      </div>
    </ErrorBoundary>
  );
};

export default ToggleTictactoe;
