import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-8xl font-bold mb-8">Oops!</h1>
      <p className="mb-8 text-5xl font-light">404 - Page not found!</p>
      <Link to="/" className="flex items-center justify-center bg-[#045ac4] text-white gap-1 py-3 px-5 rounded-md">
        <FaHome className="mr-2" />
        <p className="leading-none">Back to Home</p>
      </Link>
    </div>
  );
}

export default NotFound;
