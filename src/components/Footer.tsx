import { Heart, Instagram, Linkedin, ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/alexchen.animator"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/alexchen-animator"
    },
    {
      name: "ArtStation",
      icon: ExternalLink,
      url: "https://artstation.com/alexchen"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://behance.net/alexchen"
    }
  ];

  const quickLinks = [
    { label: "Showreel", href: "#showreel" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-cream via-background to-accent/5 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-3">Alex Chen</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Creative animator passionate about bringing stories to life through movement. 
                Specializing in character animation, motion graphics, and visual storytelling.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card hover:bg-accent/20 rounded-xl flex items-center justify-center transition-colors duration-200 shadow-soft hover:shadow-medium group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@alexchen.design</p>
              <p>+1 (555) 123-4567</p>
              <p>Los Angeles, CA</p>
            </div>
            
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 border border-green-200">
                Available for Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Chen. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="rounded-xl border-2 hover-lift bg-card/80 backdrop-blur-sm"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;