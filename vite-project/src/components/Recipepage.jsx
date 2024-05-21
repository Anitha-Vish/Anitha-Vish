import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import "../App.css";

function Recipepage({ data }) {
  return (
    <div className='mx-40 my-20'>
      <div className='mt-8 grid lg:grid-cols-4 gap-6 '>
        {data.map((item, index) => (
          <div className='bg-orange-100 my-10 shadow-md rounded overflow-hidden'>
            <div>
              {/* <img
                src={item.fields.featuredImage.fields.file.url}
           
                className='w-full h-32 sm:h-64 object-cover '
              /> */}

              <div className='my-4 px-2'>
                {/* <a href=''>
                  <span className='font-bold no-underline hover:underline font-serif'>
                    {item.fields.name} 
                  </span>
                  <br />
                </a> */}
                <nav>
                  {/* <Link key={index} to={`/recipe/${item.id}`}> */}
                  <Link key={index} to={`/recipe/${item.fields.id}`}>
                    <h4 className='text-grey-700 text-2xl mt-8 font-serif'>
                      Recipes
                    </h4>
                    <p> {item.fields.name}</p>
                    <p>{item.fields.id}</p>

                    {/* <h4 className='text-grey-700 text-2xl mt-8 font-serif'>
                    Ingredients
                  </h4>

                  <span className='text-xs'> {item.fields.ingrdients} </span>

                  <h1 className='text-grey-700 text-4xl mt-8 font-serif'>
                    Steps for the Recipes
                  </h1>
				  <br />

                  <span className='text-xs'> {item.fields.description} </span> */}
                  </Link>
                 
                </nav>
                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipepage;
