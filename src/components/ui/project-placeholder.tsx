"use client";

import Image from "next/image";
import Link from "next/link";
import Ink from "react-ink";

interface CardProps {
  title: string;
  imageSrc: string;
  liveDemoUrl: string;
  codeUrl: string;
}

const ProjectSection: React.FC<CardProps> = ({ title, imageSrc, liveDemoUrl, codeUrl }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg transition hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-4 flex w-full gap-4">
          {/* Live Demo Button */}
          <Link href={liveDemoUrl} target="_blank" className="relative w-1/2">
            <button className="relative w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Live Demo
              <Ink />
            </button>
          </Link>
          
          {/* Code Button */}
          <Link href={codeUrl} target="_blank" className="relative w-1/2">
            <button className="relative w-full rounded-md bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800">
              Code
              <Ink />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
