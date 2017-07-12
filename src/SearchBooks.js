import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import BookView from './BookView'
//Import API handlers
import * as BooksAPI from './BooksAPI';
class SearchBooks extends Component{
	state={
		query:"",
	    booksQueryResults:[]
	}
	updateQuery = (query)=>{
		this.setState({query:query.trim()})
		if(this.state.query!==''){
			BooksAPI.search(this.state.query,20)
			.then(books=> {
				if(books && books.length && typeof(books) !=='undefined' && !books.error)
					this.setState({booksQueryResults : books})
				else{
					this.setState({booksQueryResults:[]});
				}
			});
		}
	}

	render(){
		return (
	          <div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to='/'>
						Close
					</Link>
	              <div className="search-books-input-wrapper">
	                <input type="text" 
	                value={this.state.query} 
					onChange = {(event)=>this.updateQuery(event.target.value)}
	                placeholder="Search by title or author"/>
	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
					{this.state.booksQueryResults.map(book=>(
                        <li key={book.id}>
                          <BookView Book = {book} getBookShelf={this.props.getBookShelf} onChangeShelf={this.props.onChangeShelf}/> 
                        </li>
                      ))}
	              </ol>
	            </div>
	          </div>
		)
	}
}

export default SearchBooks;

//<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>