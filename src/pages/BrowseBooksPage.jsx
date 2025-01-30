import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BrowseBooksPage = () => {
  const { category } = useParams();  // Get the category from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    
    // Filter books by category
    const filteredBooks = category
      ? storedBooks.filter((book) => book.category === category)
      : storedBooks;

    setBooks(filteredBooks);
  }, [category]);  // This effect runs whenever the category changes

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl mb-6">{category ? category : "All"} Books</h2>

      {books.length === 0 ? (
        <p>No books available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="mt-2">By: {book.author}</p>
              <div className="mt-4">
                <Link to={`/book/${book.id}`} className="text-blue-600 hover:text-blue-800">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooksPage;
