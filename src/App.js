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

  onChangeShelf = (bookToBeUpdated,shelf,history)=>{
    BooksAPI.update(bookToBeUpdated,shelf);
    bookToBeUpdated.shelf=shelf; // change the shelf to new.
      this.setState((prevState) =>{
        return {booksList : [...prevState.booksList.filter(b=>(b.id !== bookToBeUpdated.id)),bookToBeUpdated]}
          //Remove old copy and replace with new one.
          //TODO: Find a better method to do this.
        }
      )
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
           <SearchBooks onChangeShelf={(book,shelf)=>{
              this.onChangeShelf(book,shelf,history);
              history.push('/');
            }
          }/>   
        )}
      />
      </div>
    )
  }
}

export default BooksApp


