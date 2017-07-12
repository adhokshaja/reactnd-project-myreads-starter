import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import './App.css'
//Import API handlers
import * as BooksAPI from './BooksAPI'

//Import Page Components
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'


class BooksApp extends Component {
  state = {
    booksList : []
  }

  fetchBooks=()=>{
    BooksAPI.getAll()
    .then(books=> this.setState({booksList:books}))
  }
  componentDidMount() {
    this.fetchBooks();
  }

  onChangeShelf = (bookToBeUpdated,newShelf,history)=>{
    BooksAPI.update(bookToBeUpdated,newShelf);
    bookToBeUpdated.shelf=newShelf; // change the shelf to new.
      this.setState((prevState) =>{
        return {booksList : [...prevState.booksList.filter(b=>(b.id !== bookToBeUpdated.id)),bookToBeUpdated]}
          //Remove old copy and replace with new one.
          //TODO: Find a better method to do this.
        }
      )
  }

  getBookShelf = (book) => {
      let currentShelf = this.state.booksList.filter((currentBook) => currentBook.id === book.id).map(book => {return book.shelf});
      if(currentShelf.length !== 0){
        console.log(currentShelf);
        return currentShelf[0];
      }
      else{
        return 'none';
      }
  }


  render() {
    return (
      <div className='app'>
      <Route exact path='/'  render={()=>(
          <BookShelf booksList={this.state.booksList} onChangeShelf={this.onChangeShelf}/>
        )}
      />
      <Route path='/search'
        render={({history})=>(
         <SearchBooks 
            getBookShelf = {this.getBookShelf}
            onChangeShelf={(book,shelf)=>{
                this.onChangeShelf(book,shelf,history);
                history.push('/');
              } 
            }
          />   
        )}
      />
      </div>
    )
  }
}

export default BooksApp


