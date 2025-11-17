import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      
      <footer className="py-8 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2025 iTech Studio. All rights reserved. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
