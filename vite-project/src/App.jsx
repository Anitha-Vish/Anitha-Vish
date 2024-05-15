import { useState } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./App.css";
import Contentful from "./components/Contentful";
import Newsletter from "./components/Newsletter";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <Navbar/> 
      <Hero/> 
      <AboutUs/>
      <Newsletter />
      <Footer/>
    </>
  );
}

export default App;
