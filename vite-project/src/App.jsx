// import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newrecipe from "./components/Newrecipe";

import "./App.css";

function App() {

  return (
    <>

      <Navbar/> 
      <Hero/> 
      <Recipes />
      <NewestRecipes/>
      
    </>
  );
}

export default App;
