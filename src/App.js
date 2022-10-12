import "./App.css";
import HackerNewsRe from "./components/news/HackerNewsRe";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  function demo() {
    document.title = "Duong Tan Huy";
  }
  demo();
  return (
    <div className="root">
      <HackerNewsRe></HackerNewsRe>
    </div>
  );
}

export default App;
