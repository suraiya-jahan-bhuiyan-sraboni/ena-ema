import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Output from "@/components/Output";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Visitors from "@/components/VIsitors";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Services/>
      <CaseStudies/>
      <Plans/>
      <Output/>
      <Reviews/>
      <FAQ/> 
      <Visitors/>
  
    </div>
  );
}
