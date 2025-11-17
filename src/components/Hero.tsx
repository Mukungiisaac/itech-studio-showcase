import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <img 
          src={logo} 
          alt="iTech Studio Logo" 
          className="w-64 h-auto mx-auto mb-8"
        />
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Crafting Digital
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From stunning graphic design to innovative software solutions, we transform your vision into reality
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="hero-cta text-lg px-8 py-6 rounded-full"
            onClick={() => scrollToSection("portfolio")}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
