import React from "react";
import { useSelector } from "react-redux";
import { upperFirstLetter, upperFirstLetter2 } from "../utils/function";
import Button from "./Button";
const ListBooks = () => {
  const { booksState, categoriesState } = useSelector((state) => state);

  return (
    <div className="my-5 d-flex justify-content-center">
      {booksState.books.length === 0 && (
        <div>
          <div className="alert alert-warning text-center w-100" role="alert">
            Sistemde listelenecek kitap kaydı yok...
          </div>
        </div>
      )}
      {booksState.books.length > 0 && (
        <div className="container my-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sıra No</th>
                <th scope="col">Kitap Adı</th>
                <th scope="col">Kategori</th>
                <th scope="col">işlemler</th>
              </tr>
            </thead>

            <tbody>
              {booksState.books.map((book, index) => {
                const myCategory = categoriesState.categories.find(
                  (item) => item.id === book.categoryId
                );

                return (
                  <tr key={book.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{upperFirstLetter(book.title)}</td>
                    <td>{upperFirstLetter2(myCategory.name)}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <Button
                          className="btn-sm"
                          text="Detay"
                          type="secondary"
                        />
                        <Button className="btn-sm" text="Sil" type="danger" />
                        <Button
                          className="btn-sm"
                          text="Güncelle"
                          type="warning"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListBooks;
