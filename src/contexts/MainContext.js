import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import { AuthProvider } from "./authContext";
import { GalleryProvider } from "./gallery-context";
import PhotoList from "../components/gallery/PhotoList";
import CartList from "../components/gallery/CartList";

// ../: vao thu muc cha
// ./: vao thu muc cung cap
// /: vao thu muc con

const MainContext = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <GalleryProvider>
                <HeaderMain></HeaderMain>
                <PhotoList></PhotoList>
                <CartList></CartList>
              </GalleryProvider>
            </AuthProvider>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/about/:detail"
          element={<div>This is helo page</div>}
        ></Route>
      </Routes>
    </>
  );
};

export default MainContext;
