import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';  // Import the 404 Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
