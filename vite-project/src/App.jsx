import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "6egxy69oc347",
      accessToken: "l6omJiUec3CKk0HGU5kewwKMN9l45Mxqi_H9I6469Fo",
    });
    console.log(import.meta.env.CONTENTFUL_SPACE_ID);

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
      <Navbar />
      <Hero />
      <Recipes />
      <Newrecipe data={data} />

      {/* <Routes>
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Recipes' element={<Recipes/>} />
        <Route path='/Newrecipe' element={<Newrecipe />} data={data} />
      </Routes> */}

      <AboutUs />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
