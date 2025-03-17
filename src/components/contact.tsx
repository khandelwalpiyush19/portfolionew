import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react"; 
import Image from 'next/image';
import  Link  from 'next/link';
import SparklesCore from "@/components/ui/sparkles";
const Contact = () => {
  
  return (
    <>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h2 className='w-full text-center text-sm md:text-xl lg:text-2xl mb-5 mt-5 text-gray-500'> Get in Touch 
      </h2>
      <h1 className='w-full text-center text-xl md:text-3xl lg:text-5xl text-blue-900 mb-5 mt-2'>Contact Me </h1>
      <h1 className="md:text-xl text-sm lg:text-3xl font-bold text-center text-white relative z-20">
      <Link href="mailto:piyushkhandelwal482@gmail.com" className="text-blue-500 cursor-pointer ">
      piyushkhandelwal482@gmail.com</Link>
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={3200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        <h1 className='text-white'>Additional links </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center mt-5">
  <Link href="https://github.com/piyushkhandelwal482" className="inline-flex items-center text-blue-500 hover:text-blue-600">
    <IconBrandGithub className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
    <span className="hidden md:inline">Github</span>
  </Link>
  <Link href="https://www.linkedin.com/in/piyush-khandelwal-b9824019b/" className="inline-flex items-center text-blue-500 hover:text-blue-600">
    <IconBrandLinkedin className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
    <span className="hidden md:inline">LinkedIn</span>
  </Link>
  <Link href="https://github.com/piyushkhandelwal482" className="inline-flex items-center text-blue-500 hover:text-blue-600">
    <IconHome className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
    <span className="hidden md:inline">Portfolio</span>
  </Link>
  <Link href="https://www.linkedin.com/in/piyush-khandelwal-b9824019b/" className="inline-flex items-center text-blue-500 hover:text-blue-600">
    <IconBrandYoutube className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
    <span className="hidden md:inline">YouTube</span>
  </Link>
  <Link href="https://www.linkedin.com/in/piyush-khandelwal-b9824019b/" className="inline-flex items-center text-blue-500 hover:text-blue-600">
    <IconBrandTwitter className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
    <span className="hidden md:inline">Twitter</span>
  </Link>
</div>

      </div>
    </div>
  
    </>
  )
}

export default Contact
