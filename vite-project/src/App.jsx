import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { createClient } from "contentful";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Newrecipe from "./components/Newrecipe";

import "./App.css";
import Contentful from "./components/Contentful";
import Newsletter from "./components/Newsletter";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Recipepage from "./components/Recipepage";
import OneRecipe from "./components/OneRecipe";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
    console.log(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);

    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: "cookBook" });
        console.log(response.items);
        setData(response.items);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup
    };
  }, []); // Empty dependency array means it runs only once after the initial render

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout data={data} />}>
          <Route index element={<Home data={data} />} />

          <Route
            path='/recipes'
            element={<Newrecipe data={data} setdata={setData} />}
          />

          <Route path='/about' element={<AboutUs />} />
          <Route path='/recipe/:id' element={<OneRecipe data={data} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
