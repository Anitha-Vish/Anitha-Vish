import React from "react";
// import { useContentful } from 'react-contentful';
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet, NavLink, Link } from "react-router-dom";

function Layout({ data }) {
  return (
    <div>
     
      <Navbar />
      <main >
        <Outlet />
      </main>
      <footer>
         <Footer />
       
      </footer>
    </div>
  );
}

export default Layout;
