import { Code2, TrendingUp, Palette, Video, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Web development, system design, app interfaces, and full-stack solutions built with modern technologies.",
    value: "Scalable, efficient, and maintainable code that powers your business",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Social media strategy, influencer marketing, brand visibility, and campaign planning that drives engagement.",
    value: "Increased reach, higher conversions, and measurable growth",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, posters, brand identity kits, and promotional materials that capture attention and communicate effectively.",
    value: "Professional visuals that elevate your brand perception",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Short-form videos, ads, promo videos, event edits, and YouTube content optimized for impact and engagement.",
    value: "Cinematic storytelling that captivates and converts viewers",
  },
  {
    icon: Megaphone,
    title: "Content Creation",
    description: "Skits, punchline scripts, storytelling, brand content, and product reviews that resonate with audiences.",
    value: "Authentic content that builds community and drives action",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services Offered</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions from concept to execution
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm font-semibold text-accent">
                      {service.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
