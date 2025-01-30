import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = dummyBooks.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div>
      <h1 className="text-4xl">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/books/${book.category}`} className="text-blue-500">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;
