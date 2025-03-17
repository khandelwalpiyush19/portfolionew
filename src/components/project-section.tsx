 "use client"
 import React from 'react'
import ProjectSection from './ui/project-placeholder';
  
 
 const Project = () => {
  const projects = [
    {
      title: "Job 24*7",
      imageSrc: "/project-1.png",
      liveDemoUrl: "https://github.com/khandelwalpiyush19/job24-7",
      codeUrl: "https://github.com/khandelwalpiyush19/job24-7"
    },
    {
      title: "Project X",
      imageSrc: "/project-2.png",
      liveDemoUrl: "https://example.com/demo",
      codeUrl: "https://github.com/example"
    }
  ];
  
   return (
     <>
     <div>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-light text-gray-500 text-center mt-2 lg:mt-7'>Browse my</h1>
      <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-blue-800 text-center mt-3 lg:mt-7'>
        Projects
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-3 lg:mt-5">
  {projects.map((project, index) => (
    <ProjectSection key={index} {...project} />
  ))}
</div>

     </>
   )
 }
 
 export default Project 
 