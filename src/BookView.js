import React from "react";

const BookView = ({ book, onChangeShelf, getBookShelf }) => {
	book.authors = book.authors || [];
	book.shelf =
		typeof getBookShelf === "function" ? getBookShelf(book) : book.shelf;
	return (
		<div className="book">
			<div className="book-left">
				<div
					className="book-cover"
					style={{
						backgroundImage: `url("${book.imageLinks
							.smallThumbnail}")`
					}}
				/>
				<div className="book-shelf-changer">
					<select
						onChange={event =>
							onChangeShelf(book, event.target.value)}
						defaultValue={book.shelf}
					>
						<optgroup label="Move to">
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</optgroup>
					</select>
				</div>
			</div>
			<div className="book-info">
				<div className="book-title">
					{!book.previewLink &&
						<span>
							{book.title}
						</span>}
					{book.previewLink &&
						<a
							href={book.previewLink}
							target="_blank"
							title="Preview Book"
						>
							{book.title}
						</a>}
				</div>
				{book.authors.length > 0 &&
					<div className="book-authors">
						{book.authors.join(", ")}
					</div>}
				{book.averageRating &&
					<div className="book-rating">
						<span
							className={`select-${Math.ceil(
								book.averageRating
							)}stars`}
						>
							<span className="star" />
							<span className="star" />
							<span className="star" />
							<span className="star" />
							<span className="star" />
						</span>
						<span className="numeric-rating">
							({book.averageRating})
						</span>
					</div>}
			</div>
		</div>
	);
};

export default BookView;
