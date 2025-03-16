"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import SparklesCore from "@/components/ui/sparkles";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col h-screen overflow-x-hidden">
        <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          {/* Sparkles Background */}
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={60}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 w-full max-w-7xl px-4 z-10">
            {/* Text */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white font-sans">
                <div className="text-2xl text-center font-medium my-3.5">
                  Hello, I'm
                </div>
                <ColourfulText text="Piyush Khandelwal" />
                <div className="text-xl md:text-3xl lg:text-4xl mt-3 text-center text-white font-sans">
                  Full-stack Developer
                </div>
              </h1>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center">
              <div
                className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
                style={{
                  borderRadius: "50%", // Circular container
                  overflow: "hidden", // Ensure the image stays within the circular bounds
                }}
              >
                <Image
                  src="/Piyush.jpg"
                  alt="piyush"
                  fill // Use fill to make the image responsive
                  style={{
                    objectFit: "cover", // Ensure the image covers the container
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Lines Section */}
      <div className="w-full bg-white dark:bg-black">
        {/* Add a background color if needed */}
      </div>
    </div>
  );
};

export default HeroSection;