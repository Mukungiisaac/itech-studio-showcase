import { Button } from "@/components/ui/button";
import { Code2, Lightbulb, Heart } from "lucide-react";
import photo1 from "@/assets/isaac-photo-1.png";
import photo2 from "@/assets/isaac-photo-2.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Who <span className="text-primary">I Am</span>
          </h2>
        </div>

        {/* Main About Section - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={photo1} 
              alt="Isaac Mukungi - Professional Content Creator" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold">Who We Are</p>
              <h3 className="text-3xl md:text-4xl font-bold">
                Creating Content That Inspires and Engages
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              At <span className="font-semibold text-accent">Obinna+ Studios</span>, we bring ideas to life. With a focus on the art and beauty 
              of the creative world, we deliver exceptional results for content creators, 
              brands, and businesses. From concept to execution, our experienced production and 
              talent management, we're your one-stop destination for creative excellence.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Cutting-edge equipment and facilities</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Experienced production team</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Flexible studio spaces</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Customized solutions for every project</p>
              </div>
            </div>

            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground mt-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Second Photo Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">
                My <span className="text-primary">Philosophy</span>
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Quality content is not just about technical perfection—it's about creating meaningful connections 
              and telling stories that resonate with your audience. Every project receives the same level of 
              dedication and creative attention to detail.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Mastery</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional-grade equipment and industry-standard techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="bg-accent text-white p-3 rounded-lg shrink-0">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Creative Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Fresh perspectives and innovative ideas for every project.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Passion Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Every frame, every edit, every detail crafted with genuine passion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl order-1 md:order-2">
            <img 
              src={photo2} 
              alt="Isaac Mukungi - Creative Professional" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
