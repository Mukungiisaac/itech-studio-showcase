import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      
      <footer className="py-8 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2025 Isaac Mukungi. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
