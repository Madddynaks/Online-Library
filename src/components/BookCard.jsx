import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="border p-4">
      <h3 className="text-xl">{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default BookCard;
