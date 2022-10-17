import "./App.css";
import TextAreaAutoReSize from "./components/TextAreaAutoReSize";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  function demo() {
    document.title = "Duong Tan Huy";
  }
  demo();

  return (
    <div className="root">
      <TextAreaAutoReSize></TextAreaAutoReSize>
    </div>
  );
}

export default App;
