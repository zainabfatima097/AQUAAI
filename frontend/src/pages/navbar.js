import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">AI Ocean Cleanup</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/about" className="mx-2">About</Link>
        <Link to="/volunteer" className="mx-2">Volunteer</Link>
        <Link to="/ai-detection" className="mx-2">AI Detection</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
