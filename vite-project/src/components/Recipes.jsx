import React, { useState, useEffect } from 'react';
import '../App.css';
import { createClient } from 'contentful';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: '6egxy69oc347',
      accessToken: 'l6omJiUec3CKk0HGU5kewwKMN9l45Mxqi_H9I6469Fo'
    });

    const fetchRecipes = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'recipesAndMenues'
        });
        setRecipes(response.items);
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
        <section className="mx-40" id="recipes">
            <div>
                <div>
                    <h4 className="text-grey-700 text-4xl mt-8 font-serif" >Recipes & Menus</h4>
                    <hr className="border-orange-500 border-1 mt-2"/>
                </div>
                <div className="mt-8 grid lg:grid-cols-4 gap-6 ">
                    {recipes.map(recipe => (
                      <div key={recipe.sys.id} className="bg-orange-100 rounded overflow-hidden shadow-md relative">
                        <div>
                            <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} className="w-full h-32 sm:h-64 object-cover "/>
                            <div className="my-4 px-2">
                               <a href="/"><span className="font-bold no-underline hover:underline font-serif">{recipe.fields.title}</span><br/></a> 
                                <span className="text-xs">{recipe.fields.description}</span><br/>
                            </div> 
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}

export default Recipes;
