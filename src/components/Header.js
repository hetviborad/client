import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Real Estate App</h1>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-300">Home</Link>
          <Link to="/register" className="mx-4 hover:text-gray-300">Register</Link>
          <Link to="/login" className="mx-4 hover:text-gray-300">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
