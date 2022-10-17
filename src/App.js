import React from "react";
import "./App.css";
import HackerNewsRe from "./components/news/HackerNewsRe";
import Toggle from "./components/toggle/Toggle";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  function demo() {
    document.title = "Duong Tan Huy";
  }
  demo();

  const [display, setDisplay] = React.useState(false);

  return (
    <div className="root">
      <div onClick={() => setDisplay(!display)}>
        <Toggle></Toggle>
      </div>
      {display && <HackerNewsRe></HackerNewsRe>}
    </div>
  );
}

export default App;
