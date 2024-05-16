import Logo from "../assets/Icons/Logo.svg";
import tiktok from "../assets/Icons/tiktok.svg";
import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.svg";
import youtube from "../assets/Icons/youtube.svg";
import linkedin from "../assets/Icons/linkedin.svg";
import pinterest from "../assets/Icons/pinterest.svg";

function Footer() {
  
return (

 <div class="bg-white py-14 px-14 ">

<div class="container mx-auto flex justify-between items-center mt-10 mb-10  ">
            
                <div class="mr-10 ">
                    <img src={Logo} alt="Logo" class="h-24 w-auto"/>
                </div>
          
    

       <div class="flex justify-center">
                <div class="flex flex-col mr-20 ">
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">About Us</a>
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Blog</a>
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Recipes</a>
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Privacy Policy</a>
                </div>

                <div class="flex flex-col ml-20">
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Career</a>
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Contact</a>
                    <a href="#" class="text-gray-700 hover:text-green-300 mr-4 mb-2">Search</a>
                </div>
         </div>

         <div class="flex flex-col items-center ">
          
                <button class="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-6 mb-8 hover:bg-green-500">Follow Us</button>
    
                <div class="flex mb-6">
                    <div class="mr-6">
                        <img src={tiktok} alt="Tiktok" class="h-8 w-auto"/>
                    </div>
                    <div class="mr-6">
                        <img src={facebook} alt="Facebook" class="h-8 w-auto"/>
                    </div>
                    <div>
                        <img src={pinterest} alt="Pinterest" class="h-8 w-auto"/>
                    </div>
                </div>
    
            
                <div class="flex">
                    <div class="mr-6">
                        <img src={youtube} alt="YouTube" class="h-8 w-auto"/>
                    </div>
                    <div class="mr-6">
                        <img src={instagram} alt="Instagram" class="h-8 w-auto"/>
                    </div>
                    <div>
                        <img src={linkedin} alt="LinkedIn" class="h-8 w-auto"/>
                    </div>
                </div>
                </div>
            </div>
         
  </div>

  )
}

export default Footer;

{/* src={require('../assets/Icons/Logo.svg')} */}