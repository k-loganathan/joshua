import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-animation.jpg";

const Hero = () => {
  const scrollToShowreel = () => {
    document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-coral))_0%,transparent_50%)] opacity-[0.03]" />
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-neon-coral/10 blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-electric-teal/10 blur-3xl animate-glow" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-lavender-glow/10 blur-2xl animate-float" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Main title with glowing effect */}
        <h1 className="text-display font-bold mb-6 animate-fade-in">
          <span className="block text-foreground/90 mb-2">Hi, I'm</span>
          <span className="text-gradient bg-gradient-to-r from-neon-coral via-lavender-glow to-electric-teal bg-clip-text text-transparent drop-shadow-lg">
            Alex Chen
          </span>
          <span className="block text-foreground/90 mt-2">an Animator</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
          Crafting compelling visual stories through motion design, character animation, and creative storytelling that brings brands and ideas to life.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-neon-coral hover:bg-neon-coral/90 text-black font-semibold shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch My Reel
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 border-electric-teal/30 text-electric-teal hover:bg-electric-teal/10 hover:border-electric-teal/50 hover:scale-105 transition-all duration-300 shadow-accent-glow"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-neon-coral rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;