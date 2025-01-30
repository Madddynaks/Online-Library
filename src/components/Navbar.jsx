import { Link } from 'react-router-dom';

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography"]; // predefined categories

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Online Library</Link>
        <div className="space-x-4">
          <Link to="/add-book" className="hover:text-gray-400">Add Book</Link>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="hover:text-gray-400"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
