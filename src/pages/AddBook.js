import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { upperFirstLetter } from "../utils/function";

const AddBook = () => {
  const { categoriesState } = useSelector((state) => state);
  return (
    <div>
      <Header />

      <div className="conatainer my-5">
        <div className="mb-3">
          <label htmlFor="title" class="form-label">
            Kitap Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Hayatı Yeniden Keşfet"
          />
        </div>
      </div>

      <div className="conatainer my-5">
        <div className="mb-3">
          <label htmlFor="author" class="form-label">
            Kitap Yazarı
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Jeffery Yong-Janet Klasko"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="publisher" class="form-label">
            Yayın Evi
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            placeholder="psikonet"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" class="form-label">
            Fiyat
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="70"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="publisher" class="form-label">
            Yayın Evi
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            placeholder="psikonet"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isbn" class="form-label">
            ISBN
          </label>
          <input
            type="number"
            className="form-control"
            id="isbn"
            placeholder="xxxxxxxxxxxx"
          />
        </div>

        <select onChange={(event) => {}} className="form-select">
          <option selected value="empty">
            Kategori Seçin
          </option>
          {categoriesState.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {upperFirstLetter(category.name)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AddBook;
