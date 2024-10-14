import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function NavBar({ title }) {
  return (
    <nav className="w-full z-10 bg-transparent overflow-none absolute top-0 left-0">
      <div className="flex justify-between items-center shadow-sm bg-white mx-auto p-2 sm:py-4 sm:px-5 border-[1px] border-gray-200">
        <div className="px-2">
          <Link to="/" className="text-2xl font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="">
          <a
            href="https://github.com/SirSimon162/GitHub-Finder"
            target="__blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 bg-black px-4 py-2 rounded-md"
          >
            <FaGithub className="text-white text-lg" />
            <p className="text-white font-medium text-sm leading-tight">
              Star on GitHub
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
