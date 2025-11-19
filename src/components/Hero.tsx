import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToCars = () => {
    document.getElementById('bilar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-float">
          <h1 className="text-8xl md:text-9xl font-pacifico text-gradient-sunset drop-shadow-lg mb-2">
            Alex Bil
          </h1>
          <div className="inline-block bg-gradient-chrome px-8 py-2 rounded-full shadow-retro">
            <p className="text-lg md:text-xl font-bold text-retro-brown tracking-widest">
              SEDAN 1977
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-3xl md:text-4xl font-righteous text-retro-cream mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Välkommen till Alex Bil
          </p>
          <p className="text-xl md:text-2xl text-retro-cream font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Bilar med stil och själ — precis som på goda gamla tiden
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={scrollToCars}
          size="lg"
          className="bg-gradient-sunset hover:opacity-90 text-primary-foreground font-righteous text-xl px-12 py-8 rounded-full shadow-glow transition-all hover:scale-105 border-4 border-chrome-light"
        >
          Se våra bilar
        </Button>

        {/* Decorative element */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-16 h-1 bg-gradient-sunset rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-chrome rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-sunset rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
