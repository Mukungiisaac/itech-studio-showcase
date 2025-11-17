import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where innovation meets creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">The Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Isaac Mukungi</span>, known in creative circles as <span className="text-primary font-semibold">Izooh</span>. By profession, I'm a <span className="font-semibold text-foreground">Software Engineer</span> who builds robust, scalable applications. But my passion extends far beyond code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've discovered that the intersection of <span className="text-primary font-semibold">technology</span> and <span className="text-primary font-semibold">creativity</span> is where magic happens. From designing eye-catching brand identities to crafting viral social media campaigns, from editing cinematic videos to creating content that resonates—I bring a unique blend of technical precision and creative flair to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach? <span className="font-semibold text-foreground">Solve problems with creativity, backed by technical skill.</span> Whether it's building a complex web application or producing a 30-second ad that captures hearts, I deliver solutions that work and inspire.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technical Excellence</h4>
                    <p className="text-muted-foreground">
                      Building scalable systems, crafting clean code, and solving complex technical challenges with modern frameworks and best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Creative Innovation</h4>
                    <p className="text-muted-foreground">
                      Transforming ideas into visual stories through design, video editing, and content that engages, entertains, and converts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Client-Focused Results</h4>
                    <p className="text-muted-foreground">
                      Understanding your vision, meeting deadlines, and delivering results that exceed expectations while maintaining authenticity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-2 bg-primary/10">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">My Philosophy</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                "Work hard, stay humble, and let your creativity speak. Mix innovation with tradition, humor with professionalism, and always deliver value. Every project is an opportunity to create something remarkable—let's make it count."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
