import React, { Fragment } from "react";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Title from "./components/advanced-react/render-props/Title";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

// custom hooks cung giong nhu fuction no duoc dinh nghia bang functions, return ra mot gia tri cu the duoc khai bao trong components khac nhu sau: const [useDemo, ...] = useHooks(); xem file countContext

function App() {
  return (
    <Fragment>
      <HandleValue></HandleValue>
      <Title>{() => <h1>Hello</h1>}</Title>
    </Fragment>
  );
}

export default App;
