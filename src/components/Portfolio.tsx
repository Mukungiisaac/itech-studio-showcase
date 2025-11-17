import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

import confusedPoster from "@/assets/portfolio/confused-poster.png";
import doctorPoster from "@/assets/portfolio/doctor-poster.png";
import advertisePoster from "@/assets/portfolio/advertise-poster.png";
import socialPoster from "@/assets/portfolio/social-media-poster.png";
import novemberPoster from "@/assets/portfolio/november-poster.png";
import software1 from "@/assets/portfolio/software-1.jpg";
import software2 from "@/assets/portfolio/software-2.jpg";

const portfolioItems = {
  design: [
    { 
      image: confusedPoster, 
      title: "Marketing Confusion Campaign", 
      category: "Digital Marketing Poster",
      tools: ["Adobe Photoshop", "Illustrator"],
      challenge: "Create engaging social media content addressing common pain points in digital marketing",
      result: "High engagement rates, sparked conversations about marketing strategy clarity"
    },
    { 
      image: doctorPoster, 
      title: "Digital Marketing Authority Branding", 
      category: "Brand Positioning",
      tools: ["Figma", "Adobe Illustrator"],
      challenge: "Position iTech Studio as the 'Doctor of Digital Marketing' with memorable visual identity",
      result: "Strengthened brand authority, increased client trust and consultation requests"
    },
    { 
      image: advertisePoster, 
      title: "Business Advertising Campaign", 
      category: "Client Acquisition",
      tools: ["Adobe Creative Suite", "3D Character Design"],
      challenge: "Create approachable, youth-friendly advertising campaign targeting small businesses",
      result: "Successfully attracted diverse client base, improved registration rates"
    },
  ],
  marketing: [
    { 
      image: socialPoster, 
      title: "Social Media Content Strategy", 
      category: "Content Marketing",
      tools: ["Photoshop", "Social Media Management"],
      challenge: "Design engaging visual that demonstrates social media marketing value",
      result: "Increased engagement across all platforms, positioned as social media expert"
    },
    { 
      image: novemberPoster, 
      title: "November Launch Campaign", 
      category: "Promotional Design",
      tools: ["Illustrator", "Photography", "Mockup Design"],
      challenge: "Create impactful monthly campaign promoting design services with personal branding",
      result: "Generated significant interest, strengthened personal brand connection"
    },
  ],
  software: [
    { 
      image: software1, 
      title: "FinTrack Mobile App", 
      category: "iOS/Android App",
      tools: ["React Native", "Node.js", "Firebase"],
      challenge: "Build a finance tracking app with real-time sync and intuitive UX",
      result: "10K+ downloads in first month, 4.8★ rating, featured by Apple"
    },
    { 
      image: software2, 
      title: "Analytics Dashboard Platform", 
      category: "Web Application",
      tools: ["React", "TypeScript", "PostgreSQL"],
      challenge: "Create a scalable analytics platform handling millions of data points",
      result: "Reduced client reporting time by 80%, serves 50+ enterprise clients"
    },
  ],
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results, real impact
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12 h-14">
            <TabsTrigger value="design" className="text-base">Design</TabsTrigger>
            <TabsTrigger value="marketing" className="text-base">Marketing</TabsTrigger>
            <TabsTrigger value="software" className="text-base">Software</TabsTrigger>
          </TabsList>

          {Object.entries(portfolioItems).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <div className="flex items-center gap-2 text-accent-foreground bg-accent px-4 py-2 rounded-full">
                            <span className="text-sm font-semibold">View Case Study</span>
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <p className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Tools:</span> {item.tools.join(", ")}
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Challenge:</span> {item.challenge}
                          </p>
                          <p className="text-accent font-semibold">
                            ✓ {item.result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
