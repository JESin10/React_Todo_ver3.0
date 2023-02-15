import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/:id" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
// BrowserRouter > Routes > Route 순서 기억하자!
// useParams을 사용했기 때문에 id만 불러올 수 있어서 /:id로 쓸수있다

export default Router;