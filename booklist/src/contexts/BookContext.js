import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Parasite", id: 1 },
    { title: "12 Monkeys", id: 2 },
    { title: "The prinche of tides", id: 3 },
    { title: "Her", id: 4 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return <BookContext.Provider value={{ books, addBook, removeBook }}>{props.children}</BookContext.Provider>;
};
export default BookContextProvider;
