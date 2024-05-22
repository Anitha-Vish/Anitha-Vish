import { useParams } from "react-router-dom";

function OneRecipe({ data, setdata }) {
  //  const params = useParams();
  const { id } = useParams();

  console.log("ID from URL:", id);
  console.log("Data array:", data);

  const recipe = data.find((recipe) => recipe.sys.id === id);
  console.log("Recipe ID", recipe.id);
  console.log("Data ID", data.id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  // Render the details of the recipe
  return (
    <div>
      <div>OneRecipe id: {recipe.sys.id} </div>
      <h2 className='text-grey-700 text-4xl mt-8 font-serif'>
        {recipe.fields.name}
      </h2>

      <div className='prose mx-40 my-10'>
        <img src={recipe.fields.featuredImage.fields.file.url} />
        <h4 className='text-grey-700 text-4xl mt-8 font-serif'>Ingredients:</h4>
        <p> {recipe.fields.ingrdients}</p>
        <br />
        <h4 className='text-grey-700 text-4xl mt-8 font-serif'>Description:</h4>
        <p> {recipe.fields.description}</p>
      </div>
    </div>
  );
}

export default OneRecipe;
