import React from 'react'
import lachs1 from "../assets/lachs1.jpg"
import Vanilla from "../assets/Vanilla.jpg"
import tio1 from "../assets/tio1.jpeg"
import masala1 from "../assets/masala1.jpeg"
import tia1 from "../assets/tia1.jpeg"
import tia2 from "../assets/tia2.jpeg"
import tio2 from "../assets/tio2.jpeg"
import rabbit2 from "../assets/rabbit2.jpeg"

const NewestRecipes = () => {
  return (
    <div className="mx-40 my-20">
            <h2 className="text-grey-700 text-4xl mt-8 font-serif">Our Newest Recipes</h2>
            <hr className="border-orange-500 border-1 mt-2"/>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="bg-orange-100 my-10 shadow-md rounded overflow-hidden">
                    <a href="./Recipe2.html"><img className="w-full h-32 sm:h-64 object-cover" src={lachs1} alt="Lachs"/></a>
                    <h3 className="my-5 pl-3 text-md font-bold font-serif">Steamed Salmon</h3>
                        <div className="pl-3 flex">
                            <img className="rounded-full size-12" src={tio1} alt="denis"/>
                            <h3 className="my-5 pl-3 text-md font-semibold ">Denis</h3>
                        </div>
                </div>
                <div className="bg-orange-100 my-10 shadow-md rounded overflow-hidden">
                    <a href="./Recipe3.html"><img className="w-full h-32 sm:h-64 object-cover" src={masala1} alt="masala"/></a>
                    <h3 className="my-5 pl-3 text-md font-bold font-serif">Chicken Masala</h3>
                        <div className="pl-3 flex">
                            <img className="rounded-full size-12" src={tia2} alt="anitha"/>
                            <h3 className="my-5 pl-3 text-md font-semibold">Anitha</h3>
                        </div>
                </div>
                <div className="bg-orange-100 my-10 shadow-md rounded overflow-hidden">
                    <a href="./Recipe4.html"><img className="w-full h-32 sm:h-64 object-cover" src={rabbit2} alt="rabbit"/></a>
                    <h3 className="my-5 pl-3 text-md font-bold font-serif">Rabbit Stew</h3>
                        <div className="pl-3 flex">
                            <img className="rounded-full size-12" src={tio2} alt="yago"/>
                            <h3 className="my-5 pl-3 text-md font-semibold">Yago</h3>
                        </div>
                </div>
                <div className="bg-orange-100 my-10 shadow-md rounded overflow-hidden">
                    <a href="./Recipe1.html"><img className="w-full h-32 sm:h-64 object-cover" src={Vanilla} alt="vanilla"/></a>
                    <h3 className="my-5 pl-3 text-md font-bold font-serif">Vanilla Cake</h3>
                        <div className="pl-3 flex">
                            <img className="rounded-full size-12" src={tia1} alt="rabia"/>
                            <h3 className="my-3 pl-3 text-md font-semibold">Rabia</h3>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default NewestRecipes;