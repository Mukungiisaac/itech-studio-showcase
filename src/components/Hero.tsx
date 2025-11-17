import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10" />
      
      <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available for Projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            Isaac Mukungi
          </h1>
          
          <div className="text-xl md:text-2xl font-semibold text-muted-foreground space-y-2">
            <p>Software Engineer • Digital Marketer</p>
            <p>Creative Designer • Content Creator</p>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Blending <span className="text-primary font-semibold">technology</span> with <span className="text-primary font-semibold">creativity</span> to craft innovative solutions that tell compelling stories and drive real results
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="hero-cta text-lg px-8 py-6 rounded-full group"
            onClick={() => scrollToSection("portfolio")}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2 hover:border-primary hover:bg-primary/5"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
