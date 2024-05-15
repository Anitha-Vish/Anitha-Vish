import Aboutus from "../assets/Aboutus.png"


function AboutUs() {
  return (
    <div
      className="flex justify-start items-center "
        style={{
          height: '600px',
          // backgroundImage: `url('/images/hero-background.jpg')`,
      backgroundImage: `url(${Aboutus})` ,
          backgroundPosition: 'center',
          backgroundSize: 'cover',  // Changed '100%' to 'cover'
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div class=" flex flex-col justify-center ">
              <h2 class="text-4xl mx-40 font-bold m-6 ">OUR STORY</h2>
              <p class=" mx-40 text-m m-6 max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nihil vel accusamus optio voluptatum excepturi doloribus maxime pariatur unde commodi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, vero.</p>
            
            <span>
            <button class="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mx-40 mt-10 hover:bg-green-500">Our Story</button>
            </span>
              
            
        </div>
    </div>

  )
}

export default AboutUs