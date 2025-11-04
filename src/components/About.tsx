import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Character Animation",
    "Motion Graphics",
    "2D Animation",
    "3D Modeling",
    "Visual Effects",
    "Storyboarding",
    "After Effects",
    "Cinema 4D",
    "Blender",
    "Photoshop",
    "Illustrator",
    "Premiere Pro"
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every frame is crafted with genuine love for the art of movement and storytelling."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Finding unique visual approaches to communicate complex ideas simply and beautifully."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering animations that not only look great but achieve your objectives."
    },
    {
      icon: Zap,
      title: "Always Learning",
      description: "Constantly exploring new techniques and staying current with animation trends."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-30 bg-gradient-to-br from-cream to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section font-bold mb-6">
              About <span className="text-gradient">Alex</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate animator with 5+ years of experience bringing ideas to life 
              through motion, creativity, and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <div className="animate-fade-in">
              <Card className="p-8 rounded-3xl shadow-medium border-0 bg-card h-full">
                <h3 className="text-2xl font-semibold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Growing up, I was fascinated by how cartoons could make me laugh, cry, and dream. 
                    That wonder sparked my journey into animation, where I discovered the magic of 
                    bringing static images to life.
                  </p>
                  <p>
                    After studying Digital Media Arts and working with creative teams across various 
                    industries, I've developed a unique approach that blends technical precision with 
                    emotional storytelling. Whether it's a character taking their first steps or a 
                    brand coming alive through motion, I believe every animation should have soul.
                  </p>
                  <p>
                    When I'm not animating, you'll find me sketching in coffee shops, exploring 
                    nature photography, or collaborating with other creatives on passion projects. 
                    I believe the best animations come from a rich life experience and genuine 
                    curiosity about the world around us.
                  </p>
                </div>
              </Card>
            </div>

            {/* Values & Approach */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-semibold mb-6">What Drives Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <Card 
                      key={value.title}
                      className="p-6 rounded-2xl shadow-soft border-0 bg-card hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-semibold mb-6">Skills & Tools</h3>
                <Card className="p-6 rounded-3xl shadow-soft border-0 bg-card">
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-accent/20 to-soft-lavender/20 border-accent/20 hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "15+", label: "Happy Clients" },
              { number: "100K+", label: "Views Generated" }
            ].map((stat, index) => (
              <Card 
                key={stat.label}
                className="p-6 text-center rounded-2xl shadow-soft border-0 bg-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;