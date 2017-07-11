import React, {Component} from 'react'
import BookView from './BookView'
import {Link} from 'react-router-dom';

class BookShelf extends Component{
	render(){
		const {booksList, onChangeShelf} = this.props;
		const currentlyReadingBooks = booksList.filter(book=>(book.shelf==="currentlyReading"));
		const wantToReadBooks = booksList.filter(book=>book.shelf==="wantToRead");
		const readBooks = booksList.filter(book=>book.shelf==="read");
		return (
			<div>
			<div className="list-books">
            <div className="list-books-title">
              <h1><span className="thin-font">My</span>Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReadingBooks.map(book=>(
                        <li key={book.id}>
                          <BookView Book = {book} onChangeShelf={onChangeShelf}/> 
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToReadBooks.map(book=>(
                           <li key={book.id}>
                            <BookView Book = {book} onChangeShelf={onChangeShelf}/> 
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                   <ol className="books-grid">
                        {readBooks.map(book=>(
                           <li key={book.id}>
                            <BookView Book = {book} onChangeShelf={onChangeShelf}/> 
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
             	<Link to="/search">Add a book</Link>
            </div>
          </div>
				</div>
		);
	}
}

export default BookShelf;