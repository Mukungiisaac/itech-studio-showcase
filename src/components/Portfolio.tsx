import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import poster1 from "@/assets/portfolio/poster-1.jpg";
import poster2 from "@/assets/portfolio/poster-2.jpg";
import software1 from "@/assets/portfolio/software-1.jpg";
import software2 from "@/assets/portfolio/software-2.jpg";
import marketing1 from "@/assets/portfolio/marketing-1.jpg";
import marketing2 from "@/assets/portfolio/marketing-2.jpg";

const portfolioItems = {
  design: [
    { image: poster1, title: "Tech Summit Poster", category: "Event Design" },
    { image: poster2, title: "Brand Identity", category: "Visual Identity" },
  ],
  marketing: [
    { image: marketing1, title: "Social Media Campaign", category: "Digital Marketing" },
    { image: marketing2, title: "Email Marketing", category: "Campaign Design" },
  ],
  software: [
    { image: software1, title: "Mobile Dashboard", category: "iOS App" },
    { image: software2, title: "Analytics Platform", category: "Web Application" },
  ],
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and creative solutions
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-14">
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
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 space-y-2">
                        <p className="text-sm font-semibold text-primary">{item.category}</p>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
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
