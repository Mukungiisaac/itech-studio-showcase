import { Button } from "@/components/ui/button";
import heroBg from "@/assets/isaac-photo-1.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 shadow-2xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="Isaac Mukungi - Professional Photo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Large Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center -z-5 pointer-events-none">
        <h2 className="text-[12vw] md:text-[10vw] font-black text-foreground/10 tracking-tight whitespace-nowrap">
          Isaac Mukungi
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 w-full py-20 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Premier Destination
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              for <span className="text-primary">Quality Content</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where creativity meets professionalism, and stories come to life.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in opacity-0"
              style={{ animationDelay: "0.4s" }}
              onClick={() => scrollToSection("portfolio")}
            >
              Discover
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
