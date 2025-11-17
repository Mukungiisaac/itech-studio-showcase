import { Palette, TrendingUp, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that communicate your brand's story. From logos to complete brand identities.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive engagement and conversions. Social media, content, and performance marketing.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Custom software solutions built with cutting-edge technology. Web apps, mobile apps, and enterprise systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="service-card border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
