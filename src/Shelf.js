import React from "react";
import BookView from "./BookView";

const Shelf = ({ booksInShelf, shelfTitle, onChangeShelf }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{booksInShelf.map(book =>
						<li key={book.id}>
							<BookView
								book={book}
								onChangeShelf={onChangeShelf}
							/>
						</li>
					)}
				</ol>
			</div>
		</div>
	);
};

export default Shelf;