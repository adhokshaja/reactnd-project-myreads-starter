import React from 'react';
import {Link} from 'react-router-dom';

const BookView = function(props) {
	const {Book,onChangeShelf} = props;
	Book.authors = Book.authors ||[];
	console.log(Book);
	return(
		<div className="book">
		  <div className="book-left">
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
		  <div className="book-info">
			  <div className="book-title">
			  {!Book.previewLink && <span>{Book.title}</span>}
			  {Book.previewLink && <a href={Book.previewLink} target="_blank" title="Preview Book">{Book.title}</a>}
			  </div>

			  <div className="book-authors">{Book.authors.join(", ")}</div>
			  {Book.averageRating &&
			  	 <div className="book-rating">
			        <span className={`select-${Math.ceil(Book.averageRating)}stars`}>
			        	<span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span> 
			        </span>
			        <span className="numeric-rating">({Book.averageRating}) </span>
		         </div>
			    }
		  </div>
		</div>
	)
}


export default BookView