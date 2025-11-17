import { Button } from "@/components/ui/button";
import { Code2, Lightbulb, Heart } from "lucide-react";
import photo1 from "@/assets/isaac-photo-1.png";
import photo2 from "@/assets/isaac-photo-2.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Who <span className="text-primary">I Am</span>
          </h2>
        </div>

        {/* Main About Section - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-slide-right opacity-0">
            <img 
              src={photo1} 
              alt="Isaac Mukungi - Professional Content Creator" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-left opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <p className="text-accent font-semibold">Who I Am</p>
              <h3 className="text-3xl md:text-4xl font-bold">
                Creating Content That Inspires and Engages
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="font-semibold text-foreground">Isaac Mukungi</span>, known in creative circles as <span className="font-semibold text-primary">Izooh</span>. By profession, I'm a <span className="font-semibold text-foreground">Software Engineer</span> who builds robust, scalable applications. But my passion extends far beyond code—I've discovered that the intersection of <span className="text-primary font-semibold">technology</span> and <span className="text-primary font-semibold">creativity</span> is where magic happens. From designing eye-catching brand identities to crafting viral social media campaigns, producing engaging audio and video content, and serving as an <span className="font-semibold text-accent">Event MC</span> at university events including the St John Ambulance event at Kisii University, I bring a unique blend of technical precision and creative flair to every project.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Full-stack development and software engineering</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Video editing and motion graphics</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Brand design and social media content</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Creative strategy and digital marketing</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Audio content production and studio content creation</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent text-white p-1.5 rounded-full shrink-0 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Event MC and live event presentation</p>
              </div>
            </div>

            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground mt-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Me
            </Button>
          </div>
        </div>

        {/* Second Photo Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1 animate-slide-right opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">
                My <span className="text-primary">Philosophy</span>
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              My approach is simple: <span className="font-semibold text-foreground">solve problems with creativity, backed by technical skill.</span> Whether it's building a complex web application or producing a 30-second ad that captures hearts, I deliver solutions that work beautifully and inspire action. Quality isn't just about technical perfection—it's about creating meaningful connections and telling stories that resonate.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Software Engineering Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Building scalable systems with modern frameworks, clean code, and best practices that stand the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20 animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <div className="bg-accent text-white p-3 rounded-lg shrink-0">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Creative Content Mastery</h4>
                  <p className="text-sm text-muted-foreground">
                    From studio-quality audio production to cinematic video editing and compelling graphic design—I create content that captivates audiences across all platforms. Whether it's podcast episodes, YouTube content, or social media campaigns, every piece is crafted to tell your story powerfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Results That Matter</h4>
                  <p className="text-sm text-muted-foreground">
                    Every line of code and every frame I edit is crafted with genuine passion and dedication to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl order-1 md:order-2 animate-slide-left opacity-0" style={{ animationDelay: "0.2s" }}>
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
