import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

import confusedPoster from "@/assets/portfolio/confused-poster.png";
import doctorPoster from "@/assets/portfolio/doctor-poster.png";
import advertisePoster from "@/assets/portfolio/advertise-poster.png";
import socialPoster from "@/assets/portfolio/social-media-poster.png";
import novemberPoster from "@/assets/portfolio/november-poster.png";
import itechmarketplace from "@/assets/portfolio/itechmarketplace.png";
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
      image: itechmarketplace, 
      title: "iTechMarketplace",
      category: "E-Commerce Platform",
      tools: ["React", "Python Backend", "PostgreSQL"],
      challenge: "Build a marketplace platform where sellers can advertise their products and customers can discover and purchase them seamlessly",
      result: "Empowered 100+ local sellers, facilitated thousands of transactions, created thriving digital marketplace"
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
  const featuredItems = [
    portfolioItems.software[0], // iTechMarketplace - top
    portfolioItems.design[0], // Confusion campaign - right
    portfolioItems.marketing[0], // Social media - bottom
    portfolioItems.design[1], // Doctor poster - left
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results, real impact
          </p>
        </div>

        {/* Diamond Layout */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative aspect-square max-w-2xl mx-auto">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <p className="text-primary-foreground font-bold text-lg md:text-xl">iTech</p>
                  <p className="text-primary-foreground font-bold text-lg md:text-xl">Studio</p>
                </div>
              </div>
            </div>

            {/* Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-56 group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-4 border-background">
                <img 
                  src={featuredItems[0].image} 
                  alt={featuredItems[0].title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-center space-y-1 px-2">
                    <Badge variant="secondary" className="mb-1 text-xs">{featuredItems[0].category}</Badge>
                    <p className="text-sm font-bold text-foreground">{featuredItems[0].title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 md:w-56 group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-4 border-background">
                <img 
                  src={featuredItems[1].image} 
                  alt={featuredItems[1].title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-center space-y-1 px-2">
                    <Badge variant="secondary" className="mb-1 text-xs">{featuredItems[1].category}</Badge>
                    <p className="text-sm font-bold text-foreground">{featuredItems[1].title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-56 group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-4 border-background">
                <img 
                  src={featuredItems[2].image} 
                  alt={featuredItems[2].title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-center space-y-1 px-2">
                    <Badge variant="secondary" className="mb-1 text-xs">{featuredItems[2].category}</Badge>
                    <p className="text-sm font-bold text-foreground">{featuredItems[2].title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 md:w-56 group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-4 border-background">
                <img 
                  src={featuredItems[3].image} 
                  alt={featuredItems[3].title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-center space-y-1 px-2">
                    <Badge variant="secondary" className="mb-1 text-xs">{featuredItems[3].category}</Badge>
                    <p className="text-sm font-bold text-foreground">{featuredItems[3].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Portfolio Grid */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">All Projects</h3>
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12 h-14">
              <TabsTrigger value="design" className="text-base">Design</TabsTrigger>
              <TabsTrigger value="marketing" className="text-base">Marketing</TabsTrigger>
              <TabsTrigger value="software" className="text-base">Software</TabsTrigger>
            </TabsList>

            {Object.entries(portfolioItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <Card key={index} className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <div className="text-center space-y-1">
                            <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="pt-6 pb-6 space-y-3">
                        <div>
                          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            {item.title}
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <Badge variant="outline" className="mb-3">{item.category}</Badge>
                        </div>
                        
                        <div className="text-sm space-y-2">
                          <p><span className="font-semibold text-primary">Tools:</span> {item.tools.join(", ")}</p>
                          <p><span className="font-semibold text-primary">Challenge:</span> {item.challenge}</p>
                          <p className="text-accent font-semibold">✓ {item.result}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
