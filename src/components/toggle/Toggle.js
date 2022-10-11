import { useState } from "react";
import "./ToggleStyle.css";

const Toggle = (props) => {
  // Su dung useState
  // B1. enabling state: useState(initialize value) -> value: bool, number, string, undefined, null, object, array
  // B2.initialize state
  // B3. reading state
  // B4. update state

  // nguyen tac su dung hooks
  //  1. su dung trong component phia tren cung
  //  2. khong viet trong cau vong lap, dieu kien, function ( != component)

  //   const array = useState(false);
  //   console.log("result", array); // [false, function]

  //   const [a, b] = [1, 2];
  //   console.log(a, b);
  const [on, setOn] = useState(false); // on = false, setOn = function

  let sendData = () => {
    props.func(!on);
  };
  return (
    <div
      style={{ marginLeft: "200px" }}
      onClick={() => {
        setOn((on) => !on);
        sendData();
      }}
    >
      <div className={`toggle ${on ? "active" : ""}`}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(on ? false : true)}>
          {on ? "Off" : "On"}
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;
