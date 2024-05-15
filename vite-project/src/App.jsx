
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Recipes from "./components/Recipes";
import NewestRecipes from "./components/NewestRecipes";
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
