import "../App.css";
import React from 'react'
import "../App.css";
import Logo from "../assets/Icons/Logo.svg"
import search from "../assets/Icons/search-svgrepo-com.svg"
import profile from "../assets/Icons/profile.svg"
import write from "../assets/Icons/write.svg"


const Navbar = () => {
    return (
      <nav className="bg-white shadow-md sticky top-0 overflow-hidden z-[100] w-full">
        <div className="flex items-center justify-between px-6"> 
          <div>
            <a href="/">
              <img src={Logo} className="w-20" alt="Logo" />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-8 font-semibold pt-6">
              <li>
                <a href="/" aria-label="Home">Home</a>
              </li>
              <li>
                <a href="/recipes" aria-label="Recipes">Recipes</a>
              </li>
              <li>
                <a href="/about" aria-label="About Us">About Us</a>
              </li>
            </ul>
          </div>
          <div className="text-xs flex items-center gap-6 py-4">
            <div>
              <a href="/profile">
                <img src={profile} className="w-5 ml-1.5" alt="Profile" />
                <span>Profile</span>
              </a>
            </div>
            <div>
              <a href="/search">
                <img src={search} className="w-5 ml-2" alt="Search" />
                <span>Search</span>
              </a>
            </div>
            <div>
              <a href="/write">
                <img src={write} className="w-5 ml-6" alt="Write a Recipe" />
                <span>Write a Recipe</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;