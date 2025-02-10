'use client';
import './globals.css';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Poppins, Figtree } from 'next/font/google';
import SlidingCards from './components/slider';
import SliderMobile from './components/sliderMobile';




const figtree700 = Figtree({
  subsets: ["latin"],
  weight: "700"
})



const poppins200 = Poppins({
  subsets: ["latin"],
  weight: "400"
})



export default function Home() {
  return (
   <div>

        <div className="flex flex-col  h-[110vh] bg-[#ef7c00]  align-bottom bg-gradient-to-b from-orange-500 to-orange-300  "> {/*  */}
            <div>


              {/*  */}

              <div className='flex flex-col'>
                  <div className="flex flex-col justify-center text-center font-[Outfit] px-6 md:px-[27vw] pt-24 pb-1">
                      <motion.h1 className={` ${figtree700.className} font-sans font-bold text-5xl md:text-6xl text-[#02243d]`}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.8, ease: "easeOut" }}> Get Ready For Ramadan</motion.h1>

                      <motion.h1 className={` ${poppins200.className} my-6 font-sans text-md md:text-xl text-slate-100`}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.8, ease: "easeOut" }}>Ramadan 2025 is approaching, and it is time to embark on a transformative spiritual journey to a month that is defined by unity, compassion, and selfless giving.</motion.h1>
                  </div>
                  <div className='flex justify-center pb-12 md:mb-20 gap-5'>
                      <Link href="https://donate.pennyappeal.ca/" target="_blank" rel="noopener noreferrer">
                      <button className={` ${figtree700.className} shadow-xl mb-0 px-10 py-4 bg-white border-white-10 rounded-full hover:bg-[#042d49] hover:ease-in-out hover:duration-200 hover:text-white`}>DONATE TODAY</button>
                      </Link>
                      
                      {/* <button 
                       onClick={() => document.getElementById("slider")?.scrollIntoView({ behavior: "smooth" })} 
                       className={` ${figtree700.className} shadow-xl mb-0 px-9 py-4 text-slate-800 border-gray-100 border-2 bg-opacity-10 border-white-10 rounded-full hover:bg-blue-950 hover:bg-opacity-25 hover:border-blue-950 hover:border-opacity-0 hover:text-white hover:ease-in-out hover:duration-200`}>EXPLORE</button> */}
                      
                  </div>
                  
              </div>

              
                          
              {/*Slider */}
              <div id="slider">
              <SlidingCards className="hidden lg:block"/> 
              <SliderMobile className="block lg:hidden pt-0" />    
              </div>
                           
            
              </div>
              
        </div>


    

   </div>
  );
}


