import React from "react";
// import { useContentful } from 'react-contentful';
import { useEffect } from "react";

import { Outlet, NavLink, Link } from "react-router-dom";

function Layout({ data }) {
  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-between">
          <li>
            <Link to='/Navbar'>Navbar</Link>
          </li>
          <li>
            <Link to='/Hero'>Hero</Link>
          </li>
          <li>
            <Link to='/Recipes'>Recipes</Link>
          </li>

          <li>
            <Link to='/Newrecipe'>Newrecipe</Link>
          </li>
          {/* <li>
            <Link to='/Recipepage'>Recipepage</Link>
          </li> */}
          <li>
            <Link to='/AboutUs'>AboutUs</Link>
          </li>
          <li>
            <Link to='/Newsletter'>Newsletter</Link>
          </li>
          <li>
            <Link to='/Footer'>Footer</Link>
          </li>
          <li>
            <Link to='/Layout'>All </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* <p>2024</p> */}
      </footer>
    </div>
  );
}

export default Layout;
