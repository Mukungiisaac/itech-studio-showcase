import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import bruceFaraday from "@/assets/testimonials/bruce-faraday.jpg";
import haggai from "@/assets/testimonials/haggai.jpg";
import emilyRodriguez from "@/assets/testimonials/emily-rodriguez.jpg";
import davidOmondi from "@/assets/testimonials/david-omondi.jpg";

const testimonials = [
  {
    name: "Haggai Osundwa",
    role: "De_Halo Creatives",
    content: "Working with Izooh on our digital marketing campaigns was a game-changer. The social media strategy he crafted tripled our engagement and the content he created consistently went viral. Highly recommend!",
    rating: 5,
    image: haggai,
  },
  {
    name: "Bruce Faraday",
    role: "Bcore Marketing Pro",
    content: "Isaac's marketing expertise transformed our brand visibility. His strategic campaigns and creative content drove exceptional results, increasing our reach by 200%. A true marketing professional who delivers measurable impact.",
    rating: 5,
    image: bruceFaraday,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeHub",
    content: "Isaac's video editing skills are top-notch. He took our raw footage and turned it into a cinematic masterpiece that perfectly captured our brand story. The attention to detail and creative vision is unmatched.",
    rating: 5,
    image: emilyRodriguez,
  },
  {
    name: "David Omondi",
    role: "Product Manager, AppVentures",
    content: "As a software engineer, Isaac built our mobile app from scratch with clean, scalable code. He's not just technically skilled—he understands user experience and design. A true full-stack creative professional.",
    rating: 5,
    image: davidOmondi,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:border-primary transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 animate-scale-in opacity-0 border-b-[6px] border-b-secondary border-t-0 border-x-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
