import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import isaacPhoto1 from "@/assets/isaac-photo-1.png";
import isaacPhoto2 from "@/assets/isaac-photo-2.png";
import marketing1 from "@/assets/portfolio/marketing-1.jpg";
import marketing2 from "@/assets/portfolio/marketing-2.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="Studio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Large Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center -z-5 pointer-events-none">
        <h2 className="text-[12vw] md:text-[10vw] font-black text-foreground/10 tracking-tight whitespace-nowrap">
          Isaac Mukungi
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Premier Destination
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                for <span className="text-primary">Quality Content</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Where creativity meets professionalism, and stories come to life.
            </p>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="hero-cta text-base px-10 py-6 text-primary-foreground font-semibold"
                onClick={() => scrollToSection("portfolio")}
              >
                Discover
              </Button>
            </div>
          </div>

          {/* Right Content - Portfolio Images */}
          <div className="relative h-[500px] hidden md:block">
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={isaacPhoto1} 
                alt="Isaac Mukungi Professional Photo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={isaacPhoto2} 
                alt="Isaac at Work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={marketing1} 
                alt="Portfolio 3" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={marketing2} 
                alt="Portfolio 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
