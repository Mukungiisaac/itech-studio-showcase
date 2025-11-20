import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const errors = validation.error.errors.map(err => err.message).join(", ");
      toast.error(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = validation.data;
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message
        }]);

      if (error) throw error;

      toast.success("Message sent! I'll review your message soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-2 animate-slide-right opacity-0">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    required 
                    className="h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    className="h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    required 
                    className="h-12"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    maxLength={200}
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    required 
                    className="min-h-[150px] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={5000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hero-cta h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-slide-left opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">itechstudios86@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+254115810222</p>
                </div>
              </div>

              <div className="pt-6 animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
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
                    href="https://www.tiktok.com/@izooh_015?_r=1&_t=ZM-91YY238caDI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <SiTiktok className="h-5 w-5" />
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
