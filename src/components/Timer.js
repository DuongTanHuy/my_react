import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("duongtanhuy");
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
        clearInterval(interval);
    }
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(even) => setMessage(even.target.value)}
      />
    </div>
  );
};

export default Timer;
