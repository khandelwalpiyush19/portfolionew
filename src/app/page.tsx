
import AboutSection from "@/components/about-section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import Project from "@/components/project-section";
import SkillSection from "@/components/skill-section";
export default function Home() {
  return (
     <>
  

     <Navbar/>
     
    
     <HeroSection/>
    
     <AboutSection/>
      

     <SkillSection/>
     
     <Project/>
     <Contact/>
     {/* </TracingBeam> */}
     <Footer/> 
     </>
  );
}
