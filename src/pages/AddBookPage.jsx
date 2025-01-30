import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography"];

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category,
      description,
      rating: parseFloat(rating),
    };

    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(newBook);

    localStorage.setItem('books', JSON.stringify(books));

    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Book Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          className="border p-2 w-full mb-4" 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)} 
          className="border p-2 w-full mb-4" 
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="border p-2 w-full mb-4"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <textarea 
          placeholder="Description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          className="border p-2 w-full mb-4" 
        />
        <input 
          type="number" 
          placeholder="Rating (1-5)" 
          value={rating}
          onChange={(e) => setRating(e.target.value)} 
          className="border p-2 w-full mb-4" 
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
