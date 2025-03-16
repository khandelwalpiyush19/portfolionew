
import AboutSection from "@/components/about-section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import ProjectSection from "@/components/project-section";
import SkillSection from "@/components/skill-section";
// import TracingBeam from "@/components/ui/tracing-beam";
import SparklesCore from "@/components/ui/sparkles";
export default function Home() {
  return (
     <>
  

     <Navbar/>
     
    
     <HeroSection/>
    
     <AboutSection/>
      

     <SkillSection/>
     
     <ProjectSection/>
     <Contact/>
     {/* </TracingBeam> */}
     <Footer/> 
     </>
  );
}
