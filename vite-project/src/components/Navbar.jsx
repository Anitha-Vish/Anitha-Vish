import React from 'react';
import "../App.css";
import MY from "../assets/Icons/MY.svg";
import search from "../assets/Icons/search-svgrepo-com.svg";
import profile from "../assets/Icons/profile.svg";
import write from "../assets/Icons/write.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isActive = (path) => window.location.pathname === path;

  return (
    <nav className="bg-white bg-opacity-80 shadow-md fixed relative top-0 z-50 w-full">
      <div className="flex items-center justify-between px-10 ml-20 mr-20 py-2">
        <div>
          <Link to="/">
            <img src={MY} className="w-24 py-0" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-semibold">
            <li>
              <Link
                to="/" 
                className={`hover:text-green-500 ${isActive('/') ? 'text-green-500' : ''}`}
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/recipes" 
                className={`hover:text-green-500 ${isActive('/recipes') ? 'text-green-500' : ''}`}
                aria-label="Recipes"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/about" 
                className={`hover:text-green-500 ${isActive('/about') ? 'text-green-500' : ''}`}
                aria-label="About Us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 py-4 text-xs">
          <div className="flex items-center gap-1.5">
            <Link
              to="/profile" 
              className={`flex items-center hover:text-green-500 ${isActive('/profile') ? 'text-green-500' : ''}`}
            >
              <img src={profile} className="w-5" alt="Profile" />
              <span className="ml-2 text-sm">Profile</span>
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
          <Link
              to="/search" 
              className={`flex items-center hover:text-green-500 ${isActive('/search') ? 'text-green-500' : ''}`}
            >

              <img src={search} className="w-5" alt="Search" />
              <span className="ml-2 text-sm">Search</span>
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <a 
              to="/write" 
              className={`flex items-center hover:text-green-500 ${isActive('/write') ? 'text-green-500' : ''}`}
            >
              <img src={write} className="w-5" alt="Write a Recipe" />
              <span className="ml-2 text-sm">Write a Recipe</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
