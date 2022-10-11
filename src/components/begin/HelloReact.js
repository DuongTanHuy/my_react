import logo from "../../logo.svg";

function HelloReact() {
  const yourName = "Huy";
  var demo = `Your name: ${yourName}`;
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {yourName === "Huy" ? "Dep trai" : "Hoc gioi"}</h1>
        <h2>{fullName("Huy", "Duong")}</h2>
        <p>{demo}</p>
        {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default HelloReact;
