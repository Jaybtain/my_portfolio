import { Navbar } from "@/components/Navbar";
import { Hero }  from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { TestimonialsSection } from "@/components/Testimonials";
import { BlogPage } from "@/components/articles";
import Resume from "@/components/Resume";
import Contact1 from "@/components/Contact1";





export default function Home() {
  return (
   <>
     <Navbar/> 
      <Hero/>
      <Stack/>
      <LogoAnimation/>
      <KeyMetrics/>
     
      <Resume/>
      
      <Portfolio/>
      
      
      <Services/>
      
      <Contact/>
      
      
     
      
      
      
     
   </>
  );
}
