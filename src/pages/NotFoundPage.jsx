import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
