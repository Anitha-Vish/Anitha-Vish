import React from 'react'
import "../App.css";

function Navbar() {
  return (
	 <div className="flex items-center p-1" id="home">
	 <div className="w-1/3 flex justify-start ml-8">
        <p>
          <img src="./assets/react.svg" alt="" width="50px" height="50px" />
        </p>
		 </div>
		  <div className="w-1/3 space-x-10 ">
        <button className=""><a href="./index.html">Home</a></button>
        <button className=""><a href="">Recepies</a></button>
        <button className=""><a href="#about-us">About us</a></button>
      </div>
	  <div class="w-1/3 flex  space-x-6  text-xs justify-end mr-6">
      <div >
                    <img src="./Icons/search-svgrepo-com.svg" alt="" width="24px" height="24px"/>
                    <p>Search</p>
                </div>
                <div>
                    <img src="./Icons/profile.svg" alt=""width="24px" height="24px"/>
                    <p>Profile</p>
                </div>
                <div >
                    <img src="./Icons/write.svg" alt="" width="24px" height="24px" class="ml-6"/>
                    <p>Write a recepie</p>
                </div>
      </div>
      </div>
  )
}

export default Navbar;