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
import contentSinging from "@/assets/portfolio/content-singing.jpg";
import contentStudio from "@/assets/portfolio/content-studio.jpg";
import eventMcee from "@/assets/event-mcee.jpg";
import eventMceeCreativity from "@/assets/event-mcee-creativity.jpg";

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
  content: [
    { 
      image: contentSinging, 
      title: "Audio Content Production", 
      category: "Podcast & Music Recording",
      tools: ["Studio Equipment", "Audio Editing", "Sound Design"],
      challenge: "Create high-quality audio content with professional sound engineering and production",
      result: "Delivered engaging podcast episodes and music recordings with exceptional audio quality"
    },
    { 
      image: contentStudio, 
      title: "Studio Content Creation", 
      category: "Media Production",
      tools: ["Professional Microphone", "Audio Interface", "Editing Software"],
      challenge: "Produce compelling content that resonates with target audiences across multiple platforms",
      result: "Built consistent content library, increased audience engagement and brand presence"
    },
  ],
  eventmc: [
    { 
      image: eventMcee, 
      title: "Event MC - St John Ambulance at Kisii University", 
      category: "Event Hosting",
      tools: ["Public Speaking", "Audience Engagement", "Event Coordination"],
      challenge: "Host a university event for St John Ambulance, ensuring smooth transitions and maintaining audience engagement throughout",
      result: "Successfully hosted event with excellent crowd engagement, professional delivery, and seamless program flow"
    },
    { 
      image: eventMceeCreativity, 
      title: "Creativity Night MC - Kisii University Christian Union", 
      category: "Christian Event Hosting",
      tools: ["Public Speaking", "Audience Engagement", "Entertainment Coordination"],
      challenge: "Host a creative night event for the Christian Union, balancing entertainment with spiritual atmosphere and keeping the audience engaged",
      result: "Created a memorable evening with excellent audience participation, smooth transitions, and maintained the spiritual essence of the event"
    },
  ],
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results, real impact
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-2 md:grid-cols-5 gap-2 mb-12 h-auto md:h-14 p-2">
            <TabsTrigger value="design" className="text-sm md:text-base">Design</TabsTrigger>
            <TabsTrigger value="marketing" className="text-sm md:text-base">Marketing</TabsTrigger>
            <TabsTrigger value="software" className="text-sm md:text-base">Software</TabsTrigger>
            <TabsTrigger value="content" className="text-sm md:text-base">Content Creation</TabsTrigger>
            <TabsTrigger value="eventmc" className="text-sm md:text-base">Event MC</TabsTrigger>
          </TabsList>

          {Object.entries(portfolioItems).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group animate-scale-in opacity-0"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden bg-muted">
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
