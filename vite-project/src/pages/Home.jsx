import Hero from "../components/Hero";
import Recipes from "../components/Recipes";
import Newrecipe from "../components/Newrecipe";
import AboutUs from "../components/AboutUs";
import Newsletter from "../components/Newsletter";

const Home = ({ data }) => {
  return (
    <>
      <Hero />
      <Recipes />
      <Newrecipe data={data} />
      <AboutUs />
      <Newsletter />
    </>
  );
};

export default Home;
