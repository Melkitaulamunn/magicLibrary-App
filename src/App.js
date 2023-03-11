import React from "react";

import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const { booksState, categoriesState } = useSelector((state) => state);
  console.log(booksState, categoriesState);
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
