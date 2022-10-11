import "./App.css";
// import HackerNews from "./components/news/HackerNews";
import ToggleTictactoe from "./components/ToggleTictactoe/ToggleTictactoe";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  function demo() {
    document.title = "Duong Tan Huy";
  }
  demo();
  return (
    <div className="root">
      {/* <HackerNews></HackerNews> */}
      <ToggleTictactoe></ToggleTictactoe>
    </div>
  );
}

export default App;
// hello
