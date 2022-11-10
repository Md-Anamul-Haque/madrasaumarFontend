import React from 'react'
import Book from '../components/book'

const Books = () => {
  return (
<section className="body-font">
  <h1 className='text-4xl text-center font-black mt-3'>lists of Books</h1>
        <div className="px-3 mx-auto">
          <div className="flex flex-wrap justify-center">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </section>
  )
}

export default Books
