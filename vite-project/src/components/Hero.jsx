import React from "react";


function Hero() {
  return (
    <div
     className="flex justify-start items-center"
      style={{
        height: '600px',
        // backgroundImage: `url('/images/hero-background.jpg')`,
		 backgroundImage: `url('/assets/HeroSection.png')`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }}
    >

     <a href="/">
        <h2 className="font-serif text-5xl ml-40">RECIPE OF THE DAY</h2>
      </a>
    </div>
  );
}

export default Hero;
