import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  duration: string;
  tools: string[];
  color: string;
  videoId?: string;
  videoUrl?: string; // paste full YouTube or Vimeo URL here
};

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Character Story Arc",
    description: "Emotional character animation for an indie short film, showcasing personality development through subtle movement and expression.",
    category: "Character Animation",
    year: "2024",
    duration: "45 seconds",
    tools: ["After Effects", "Photoshop", "Procreate"],
    color: "from-neon-coral/20 to-lavender-glow/20",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Brand Motion Identity",
    description: "Complete motion graphics package for a tech startup, including logo animations, transitions, and social media assets.",
    category: "Motion Graphics",
    year: "2024",
    duration: "2 minutes",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    color: "from-electric-teal/20 to-neon-coral/20",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Explainer Animation",
    description: "Educational animation explaining complex financial concepts through simple, engaging visual metaphors and smooth transitions.",
    category: "Explainer Video",
    year: "2024",
    duration: "90 seconds",
    tools: ["After Effects", "Illustrator", "Audition"],
    color: "from-lavender-glow/20 to-electric-teal/20",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Product Showcase",
    description: "3D product animation for e-commerce, highlighting features through dynamic camera movements and realistic lighting.",
    category: "3D Animation",
    year: "2023",
    duration: "30 seconds",
    tools: ["Blender", "After Effects", "Photoshop"],
    color: "from-neon-coral/20 to-electric-teal/20",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Music Video",
    description: "Abstract visual interpretation of an electronic music track, synchronizing geometric animations with audio beats and rhythm.",
    category: "Music Video",
    year: "2023",
    duration: "3 minutes",
    tools: ["After Effects", "Cinema 4D", "Premiere"],
    color: "from-lavender-glow/20 to-neon-coral/20",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Social Campaign",
    description: "Series of animated social media posts for environmental awareness, using organic shapes and natural color palettes.",
    category: "Social Media",
    year: "2023",
    duration: "15 seconds each",
    tools: ["After Effects", "Illustrator", "Lottie"],
    color: "from-electric-teal/20 to-lavender-glow/20",
    videoId: "dQw4w9WgXcQ"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold mb-6">
            Selected <span className="text-gradient bg-gradient-to-r from-neon-coral via-lavender-glow to-electric-teal bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent animation work across different styles, 
            techniques, and storytelling approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card hover-glow rounded-3xl shadow-medium border border-muted/20 cursor-pointer transition-all duration-300"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Thumbnail with Glowing Overlay */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-neon-coral/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-300 border border-neon-coral/30 shadow-glow">
                    <Play className="w-6 h-6 text-neon-coral ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-card/90 text-foreground border border-electric-teal/30">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-card/90 border-lavender-glow/50 text-lavender-glow">
                    {project.year}
                  </Badge>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{project.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs border-electric-teal/30 text-electric-teal">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Click to view</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-coral transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal with YouTube Video */}
        {selectedProject && (() => {
          const project = portfolioProjects.find(p => p.id === selectedProject);
          if (!project) return null;

          // Support either full YouTube/Vimeo URL via project.videoUrl or a YouTube videoId
          const getYouTubeId = (url: string) => {
            try {
              const u = new URL(url);
              if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
              if (u.searchParams.get("v")) return u.searchParams.get("v")!;
              const pathParts = u.pathname.split("/");
              const last = pathParts[pathParts.length - 1];
              return last || "";
            } catch {
              return "";
            }
          };

          const embedSrc =
            project.videoUrl
              ? (project.videoUrl.includes("vimeo.com")
                  ? project.videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")
                  : `https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}`)
              : project.videoId
                ? `https://www.youtube.com/embed/${project.videoId}`
                : "";

          return (
            <div 
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <div 
                className="bg-card rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-large animate-scale-in border border-neon-coral/20 my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Video Player */}
                <div className="aspect-video w-full mb-6 rounded-2xl overflow-hidden border border-neon-coral/30 shadow-glow">
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedSrc || "about:blank"}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-neon-coral via-lavender-glow to-electric-teal bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 bg-neon-coral text-black rounded-xl hover:bg-neon-coral/90 transition-colors font-semibold shadow-glow shrink-0"
                    >
                      Close
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-card/90 text-foreground border border-electric-teal/30">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="bg-card/90 border-lavender-glow/50 text-lavender-glow">
                      {project.year}
                    </Badge>
                    <Badge variant="outline" className="bg-card/90 border-neon-coral/50 text-neon-coral">
                      {project.duration}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs border-electric-teal/30 text-electric-teal">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Portfolio;