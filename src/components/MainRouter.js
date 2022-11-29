import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage';
import BlogPageDetail from './BlogPageDetail';
import Nav from './Nav';
import ProfilePage from './ProfilePage';

const MainRouter = () => {
    return (
        <>
            <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/blog/:slug" element={<BlogPageDetail></BlogPageDetail>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<div>This is a 404 page</div>}></Route>
      </Routes>
        </>
    );
};

export default MainRouter;