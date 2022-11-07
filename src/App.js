import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogPageDetail from "./components/BlogPageDetail";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

// custom hooks cung giong nhu fuction no duoc dinh nghia bang functions, return ra mot gia tri cu the duoc khai bao trong components khac nhu sau: const [useDemo, ...] = useHooks(); xem file countContext

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/blog/:slug" element={<BlogPageDetail></BlogPageDetail>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<div>This is a 404 page</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
