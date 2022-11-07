export default function Book({book}) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      { book.favorite &&
        <h3>♥</h3>
      }  
    </div>
  );
}