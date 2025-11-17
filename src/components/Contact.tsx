import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-2">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" required className="h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required className="h-12" />
                </div>
                <div>
                  <Input placeholder="Subject" required className="h-12" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    required 
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hero-cta h-12 text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">itechstudios86@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+254115810222</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-2 bg-primary/10">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you need a stunning brand identity, a powerful digital marketing campaign, 
                  custom software solutions, or engaging video content—I'm here to help transform 
                  your ideas into reality.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Fast response time (within 24 hours)</p>
                  <p>✓ Free initial consultation</p>
                  <p>✓ Flexible pricing and packages</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
