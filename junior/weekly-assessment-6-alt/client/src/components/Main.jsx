import NewBook from './NewBook';
import BookList from './BookList';

export default function Main() {
  return (
    <div className="dashboard">
      <BookList />
      <NewBook />
    </div>
  );
}
