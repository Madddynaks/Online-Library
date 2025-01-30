import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const foundBook = storedBooks.find((b) => b.id === id);
    setBook(foundBook);
  }, [id]);

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">{book.title}</h2>
      <p className="text-lg">By: {book.author}</p>
      <p className="mt-4">{book.description}</p>
      <p className="mt-2">Rating: {book.rating} / 5</p>
      <p className="mt-2">Category: {book.category}</p>

      <div className="mt-6">
        <Link to="/">
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;
