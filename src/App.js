import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import api from "./api/api";
import urls from "./api/urls";
import actionTypes from "./redux/actions/actionTypes";
import Loading from "./components/Loading";
import Error from "./components/Error";
import AddBook from "./pages/AddBook";

function App() {
  const { booksState, categoriesState } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("bookstate:", booksState);
  console.log("categoriesState:", categoriesState);

  useEffect(() => {
    /*for get books*/
    dispatch({ type: actionTypes.bookActions.GET_BOOKS_START });
    api
      .get(urls.books)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.bookActions.GET_BOOKS_SUCCESS,
            payload: res.data,
          });
        }, 2000);
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.bookActions.GET_BOOKS_FAIL,
          payload: "Kitap bilgilerini çekerken hata oluştu",
        });
      });

    /* for get categories*/
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(urls.categories)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
            payload: res.data,
          });
        }, 2000);
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Kategori bilgileri yüklenirken hata oluştu",
        });
      });
  }, []);

  if (booksState.pending === true || categoriesState.pending === true)
    return <Loading />;
  if (booksState.error === true || categoriesState.Error === true)
    return <Error />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
