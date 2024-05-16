// import { useState } from "react";

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

  return (
    <>

      <Navbar/> 
      <Hero/> 
      <Recipes/> 
      <Newrecipe/>
      <AboutUs/>
      <Newsletter />
      <Footer/>
     
      
    </>
  );
}

export default App;
