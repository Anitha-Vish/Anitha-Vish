import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import "../App.css";

const Page = ({ data }) => {
 
  return (
    <div className='mx-40 my-20'>
      <h2 className='text-grey-700 text-4xl mt-8 font-serif'>
        Our Newest Recipes
      </h2>

      <div className='mt-8 grid lg:grid-cols-4 gap-6 '>
        {data.map((item) => (
          <div
            key={item.sys.id}
            className='bg-orange-100 my-10 shadow-md rounded overflow-hidden'>
            <div>
              {/* <img
                src={item.fields.featuredImage.fields.file.url}
           
                className='w-full h-32 sm:h-64 object-cover '
              /> */}
              <div className='my-4 px-2'>
                <a href=''>
                  <span className='font-bold no-underline hover:underline font-serif'>
                    {item.fields.ing}
                  </span>
                  <br />
                </a>

                <span className='text-xs'> {item.fields.description} </span>

                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
