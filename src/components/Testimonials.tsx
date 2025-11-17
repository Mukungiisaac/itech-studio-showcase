import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Isaac delivered a complete brand identity and web platform that exceeded our expectations. His ability to understand our vision and translate it into reality was remarkable. Professional, creative, and always on time.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Working with Izooh on our digital marketing campaigns was a game-changer. The social media strategy he crafted tripled our engagement and the content he created consistently went viral. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeHub",
    content: "Isaac's video editing skills are top-notch. He took our raw footage and turned it into a cinematic masterpiece that perfectly captured our brand story. The attention to detail and creative vision is unmatched.",
    rating: 5,
  },
  {
    name: "David Omondi",
    role: "Product Manager, AppVentures",
    content: "As a software engineer, Isaac built our mobile app from scratch with clean, scalable code. He's not just technically skilled—he understands user experience and design. A true full-stack creative professional.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
