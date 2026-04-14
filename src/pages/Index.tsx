import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Excellence from "@/components/Excellence";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Process from "@/components/Process";

import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Excellence />
      <Highlights />
      <Services />
      <Process />
      
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Founder />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
