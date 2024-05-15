// import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newrecipe from "./components/Newrecipe";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero/>
      <Newrecipe />
    </>
  );
}

export default App;
