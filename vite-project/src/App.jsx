// import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentfulComponent from "./components/ContentfulComponent";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Newrecipe />
    </>
  );
}

export default App;
