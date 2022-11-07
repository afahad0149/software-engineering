import { useEffect, useState } from 'react';
import BookCard from './BookCard';

export default function BookList() {

  const [books, setBooks] = useState([])
  async function clientAPI() {
    const response = await fetch(`http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/books`);
    const data = await response.json();
    setBooks(data.data.reverse());
  }
  useEffect(() => {
    clientAPI();
  })

  return (
    <>
    { books.length && (
        <div className="books-list">
          { books.map( (book, index) =>
            <div className='event' key = {index}>
              <BookCard book={book}></BookCard>
            </div>
          )}
        </div>
      )}
    </>
  );
}