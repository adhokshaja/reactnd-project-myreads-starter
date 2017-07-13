import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const BookShelfView = ({ booksList, onChangeShelf }) => {
  const currentlyReadingBooks = booksList.filter(
    book => book.shelf === "currentlyReading"
  );
  const wantToReadBooks = booksList.filter(book => book.shelf === "wantToRead");
  const readBooks = booksList.filter(book => book.shelf === "read");
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>
            <span className="thin-font">My</span>Reads
          </h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              key="currentlyReading"
              shelfTitle="Currently Reading"
              booksInShelf={currentlyReadingBooks}
              onChangeShelf={onChangeShelf}
            />
            <Shelf
              key="wantToRead"
              shelfTitle="Want to Read"
              booksInShelf={wantToReadBooks}
              onChangeShelf={onChangeShelf}
            />
            <Shelf
              key="read"
              shelfTitle="Read"
              booksInShelf={readBooks}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookShelfView;
