const Showreel = () => {
  return (
    <section id="showreel" className="py-20 md:py-30 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-section font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-neon-coral via-lavender-glow to-electric-teal bg-clip-text text-transparent">
                Animation Showreel 2024
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              A curated collection of my best work in character animation, motion graphics, 
              and visual storytelling from the past year.
            </p>
          </div>

          {/* Video Container with Glowing Border */}
          <div className="animate-scale-in relative aspect-video rounded-3xl overflow-hidden shadow-large bg-card border-glow">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neon-coral/20 via-lavender-glow/20 to-electric-teal/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-neon-coral/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-neon-coral/30 shadow-glow hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-neon-coral border-t-transparent border-b-transparent ml-1"></div>
                </div>
                <p className="text-foreground font-medium text-lg">Showreel Coming Soon</p>
                <p className="text-muted-foreground text-sm mt-2">Currently editing the latest projects</p>
              </div>
            </div>
          </div>

          {/* Video Details with Glowing Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-2xl p-6 shadow-medium hover-glow border border-electric-teal/20">
                <h3 className="font-semibold text-lg mb-2 text-electric-teal">Duration</h3>
                <p className="text-muted-foreground">2 minutes 30 seconds</p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card rounded-2xl p-6 shadow-medium hover-glow border border-neon-coral/20">
                <h3 className="font-semibold text-lg mb-2 text-neon-coral">Projects Featured</h3>
                <p className="text-muted-foreground">12 unique animations</p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-card rounded-2xl p-6 shadow-medium hover-glow border border-lavender-glow/20">
                <h3 className="font-semibold text-lg mb-2 text-lavender-glow">Techniques</h3>
                <p className="text-muted-foreground">2D, 3D & Motion Graphics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;