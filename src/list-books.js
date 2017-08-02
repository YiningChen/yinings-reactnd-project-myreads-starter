import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookOrderedList from './book-ordered-list-grid'

class ListBooks extends Component {
  render () {
    const { currentlyReading, wantToRead, read } = this.props.shelves
    const updateStateWithBooks = this.props.updateStateWithBooks
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <BookOrderedList books={currentlyReading} updateStateWithBooks={updateStateWithBooks} />
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                <BookOrderedList books={wantToRead} updateStateWithBooks={updateStateWithBooks} />
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <BookOrderedList books={read} updateStateWithBooks={updateStateWithBooks} />
              </div>
            </div>
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
