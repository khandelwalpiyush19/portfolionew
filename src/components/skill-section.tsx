import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import { Badge } from "./ui/badge";

const SkillSection = () => {
  return (
    <div className="w-full bg-black py-10 relative z-10 mt-[1000] md:mt-5 lg:mt-5">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-sm md:text-xl lg:text-2xl mb-5 mt-5 text-gray-500">
          Explore my
        </h1>
        <h2 className="w-full text-center text-xl md:text-3xl lg:text-5xl text-blue-900 mb-5 mt-2">
          Skills and
        </h2>
        <h3 className="w-full text-center text-xl md:text-3xl lg:text-5xl mb-5 mt-2">
          <ColourfulText text="Tech Stack" />
        </h3>
      </div>

      {/* Grid Layout for Image and Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center w-full max-w-7xl mx-auto px-4">
        {/* Image */}
        <div className="flex justify-center items-center">
          <div
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            style={{
              borderRadius: "10%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/codingPerson.jpg"
              alt="piyush"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Badges - Development Skills */}
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
            Development
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
             
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                HTML
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               CSS
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                JavaScript
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                React
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                Node.js
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                MERN
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                Next.js
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                Python
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                TypeScript
              </Badge>
              <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
                C & C++
              </Badge>
            
          </div>
        </div>

        {/* Badges - Other Skills */}
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
            Other Skills
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
             
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               Cloud
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
              AWS
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               CI/CD
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
              Docker
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               Redux
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               Jenkins
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               RESTful API
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
               Shadcn
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
              Postman
             </Badge>
             <Badge variant="outline" className="text-white text-sm md:text-lg lg:text-xl">
              Redis
             </Badge>
           
         </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;