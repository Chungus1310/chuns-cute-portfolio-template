import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-text-pink mb-4">404 - Page Not Found</h1>
      <p className="text-text-gray mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-primary-pink hover:bg-accent-pink text-white font-bold py-2 px-4 rounded">
        Go Back to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;