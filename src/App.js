import "./App.css";
import ToolTip from "./components/modal/ToolTip";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  return (
    <div className="root">
      <ToolTip
        Children="JSX attributes must only be assigned a non-empty expression."
        text="Hover me!"
      ></ToolTip>
    </div>
  );
}

export default App;
