import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

import poster1 from "@/assets/portfolio/poster-1.jpg";
import poster2 from "@/assets/portfolio/poster-2.jpg";
import software1 from "@/assets/portfolio/software-1.jpg";
import software2 from "@/assets/portfolio/software-2.jpg";
import marketing1 from "@/assets/portfolio/marketing-1.jpg";
import marketing2 from "@/assets/portfolio/marketing-2.jpg";

const portfolioItems = {
  design: [
    { 
      image: poster1, 
      title: "Tech Summit 2024 Poster", 
      category: "Event Design",
      tools: ["Adobe Photoshop", "Illustrator"],
      challenge: "Create a vibrant poster that captures the energy of a tech conference while maintaining readability",
      result: "Increased event registrations by 45% through social media shares"
    },
    { 
      image: poster2, 
      title: "Modern Brand Identity Kit", 
      category: "Visual Identity",
      tools: ["Figma", "Adobe Illustrator"],
      challenge: "Develop a complete brand system for a startup that balances professionalism with approachability",
      result: "Client secured $500K seed funding, citing brand impact in pitch"
    },
  ],
  marketing: [
    { 
      image: marketing1, 
      title: "Instagram Growth Campaign", 
      category: "Social Media Marketing",
      tools: ["Meta Ads Manager", "Canva", "Analytics"],
      challenge: "Grow organic reach and engagement for a lifestyle brand in a saturated market",
      result: "3x follower growth in 60 days, 250% increase in engagement rate"
    },
    { 
      image: marketing2, 
      title: "Product Launch Email Series", 
      category: "Email Marketing",
      tools: ["Mailchimp", "Photoshop"],
      challenge: "Design a 5-email sequence that converts subscribers to customers during product launch",
      result: "42% open rate, 18% click-through rate, $125K in launch week sales"
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
  videos: [
    {
      image: marketing1,
      title: "Brand Story Short Film",
      category: "Commercial Video",
      tools: ["Adobe Premiere Pro", "After Effects"],
      challenge: "Tell a compelling 60-second brand story that drives emotional connection",
      result: "2M+ views across platforms, 15% increase in brand awareness"
    },
    {
      image: poster1,
      title: "Product Demo & Tutorial",
      category: "Educational Content",
      tools: ["Final Cut Pro", "Motion Graphics"],
      challenge: "Explain complex software features in an engaging, easy-to-follow format",
      result: "Reduced support tickets by 30%, 95% viewer retention rate"
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
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-14">
            <TabsTrigger value="design" className="text-base">Design</TabsTrigger>
            <TabsTrigger value="marketing" className="text-base">Marketing</TabsTrigger>
            <TabsTrigger value="software" className="text-base">Software</TabsTrigger>
            <TabsTrigger value="videos" className="text-base">Videos</TabsTrigger>
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
                          <div className="flex items-center gap-2 text-primary-foreground bg-primary px-4 py-2 rounded-full">
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
                          <p className="text-primary font-semibold">
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
