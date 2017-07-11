import React from 'react';
import {Link} from 'react-router-dom';

const BookView = function(props) {
	const {Book,onChangeShelf} = props;
	Book.authors = Book.authors ||[];
	return(
		<div className="book">
		  <div className="book-top">
		    <div className="book-cover" 
				style={{  backgroundImage: `url("${Book.imageLinks.smallThumbnail}")` }}>
		    </div>
		    <div className="book-shelf-changer">
		      <select onChange={(event)=>onChangeShelf(Book,event.target.value)} defaultValue={Book.shelf}>
		        <optgroup label="Move to">
			        <option value="currentlyReading">Currently Reading</option>
			        <option value="wantToRead">Want to Read</option>
			        <option value="read">Read</option>
			        <option value="none">None</option>
		        </optgroup>
		      </select>
		    </div>
		  </div>
		  <div className="book-title">{Book.title}</div>
		  <div className="book-authors">{Book.authors.join(", ")}</div>
		</div>
	)
}


export default BookView