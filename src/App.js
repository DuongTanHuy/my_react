import React from "react";
import Main from "./components/advanced-react/control-props/Main";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

// custom hooks cung giong nhu fuction no duoc dinh nghia bang functions, return ra mot gia tri cu the duoc khai bao trong components khac nhu sau: const [useDemo, ...] = useHooks(); xem file countContext

function App() {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Main></Main>
    </div>
  );
}

export default App;
