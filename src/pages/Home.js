import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Button from "../components/Button";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="container my-5">
        <div className="d-flex justify-content-end ">
          <Button
            text="Kitap Ekle"
            type="secondary"
            onClick={() => navigate("/add-book")}
          />
        </div>
        <ListBooks />
      </div>
    </div>
  );
};

export default Home;
