import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="process">
        <Process />
      </div>
      <Testimonials />
      <TechStack />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
