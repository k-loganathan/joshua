import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/alexchen.animator",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/alexchen-animator",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "ArtStation",
      icon: ExternalLink,
      url: "https://artstation.com/alexchen",
      color: "from-blue-600 to-teal-500"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://behance.net/alexchen",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your vision to life through animation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <Card className="p-6 rounded-2xl shadow-soft border-0 bg-card hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-soft-lavender rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">hello@alexchen.design</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 rounded-2xl shadow-soft border-0 bg-card hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gentle-mint to-warm-peach rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 rounded-2xl shadow-soft border-0 bg-card hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-soft-lavender to-gentle-mint rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-muted-foreground">Los Angeles, CA</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-6">Follow My Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="p-4 rounded-2xl shadow-soft border-0 bg-card hover-lift text-center">
                        <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-sm font-medium">{social.name}</p>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Card className="p-6 rounded-2xl shadow-soft border-0 bg-gradient-to-br from-accent/10 to-soft-lavender/10">
                  <div className="text-center">
                    <Badge className="mb-3 bg-green-100 text-green-800 border-green-200">
                      Available for Projects
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting new animation projects. 
                      Typical response time: 24 hours.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-3xl shadow-medium border-0 bg-card animate-slide-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-xl border-2 focus:border-accent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl border-2 focus:border-accent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl border-2 focus:border-accent transition-colors"
                      placeholder="What's your project about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl border-2 focus:border-accent transition-colors resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-medium hover-lift rounded-2xl shadow-medium bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    I'll get back to you within 24 hours. For urgent projects, 
                    feel free to call me directly.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;