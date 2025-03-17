"use client";
import React from "react";
import BackgroundLines from "./ui/background-lines";
import { GlareCard } from "./ui/glare-card";
import { Award, Users } from "lucide-react";
import FlipWords from "./ui/flip-words";

const AboutSection = () => {
  const words = ["Full-Stack", "Web", "Frontend", "Backend"];
  return (
    <div className="bg-zinc-900 w-full relative z-10">
      {/* BackgroundLines Section */}
      <BackgroundLines className="flex items-center w-full flex-col px-4 py-10 bg-zinc-950">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-white font-sans mb-5 mt-5">
          Get To Know More
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-blue-900 font-sans mb-5 mt-2">
          About me
        </h2>

        {/* Grid Layout for Cards and Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center w-full max-w-7xl mx-auto place-items-center">
          {/* Experience Card */}
          <div className="text-sm md:text-xl lg:text-xl text-center text-gray-400 font-sans">
            I am an accomplished<FlipWords words={words}className="text-blue-300"/>developer with
            extensive expertise in designing and delivering fully functional,
            scalable, and high-performing web applications. Leveraging the latest
            tools, frameworks, and technologies, I craft solutions that push the
            boundaries of innovation while ensuring seamless user experiences. My
            skill set extends to containerization, CI/CD pipelines, and
            developing robust microservices-based architectures, empowering me to
            build modern, efficient, and maintainable systems. I am passionate
            about solving complex challenges with precision and delivering
            exceptional value to clients through cutting-edge, forward-thinking
            solutions.
          </div>
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white items-center text-lg">
              <Award />
            </p>
            <h1 className="text-white font-bold text-xl mt-2">Experience</h1>
            <p className="font-normal text-base text-neutral-200 mt-4">
              1+ years <br />
              Full-Stack Development
            </p>
          </GlareCard>

          {/* Education Card */}
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white items-center text-lg">
              <Users />
            </p>
            <h1 className="text-white font-bold text-xl mt-2">Education</h1>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Bachelor in Computer Application <br />
              (BCA)
            </p>
          </GlareCard>

          {/* Description Text */}
        </div>
      </BackgroundLines>
    </div>
  );
};

export default AboutSection;