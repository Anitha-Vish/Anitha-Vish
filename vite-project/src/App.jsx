import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
      {/* <Navbar />
      <Hero />
      <Recipes />
      <Newrecipe data={data}/>
      <AboutUs />
      <Newsletter />
      <Footer />
      <Recipepage data={data} />
      <OneRecipe data={data} />
      <Layout data={data} /> */}
         
       <Routes>
      <Route path="/" element={<Layout data={data} />}>
      
         <Route path="/"/>
          
       
        // <Route path="/Navbar" element={<Navbar />} />
        // <Route path="/Hero" element={<Hero />} />
        // <Route path="/Recipes"  element={<Recipes />} />
        // <Route path="/Newrecipe" element={<Newrecipe data={data} /> }  />
        // <Route path="/AboutUs" element={<AboutUs />} />
        // <Route path="/Newsletter" element={<Newsletter />} />
        // <Route path="/Footer" element={<Footer />} />

  
        <Route path="/Navbar/Hero/Recipes/Newrecipe/AboutUs/Newsletter/Footer" component={Layout} />
      

       {/* <Route path='/Recipepage' element={<Recipepage data={data} />} /> */}
       <Route path="/Newrecipe" element={<Newrecipe data={data} setdata={setData} /> }  />
       <Route path='/recipe/:id' element={<OneRecipe data={data} /> } /> 
      </Route>
    </Routes>

    </>
  );
}

export default App;
