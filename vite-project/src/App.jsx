// import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Newrecipe from "./components/Newrecipe";

import "./App.css";

function App() {

  return (
    <>

      <Navbar/> 
      <Hero/> 
       <Recipes/> 
      <Newrecipe/>
      
    </>
  );
}

export default App;
