import alexPortrait from "@/assets/alex-portrait.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-sunset opacity-20 blur-xl"></div>
              <img 
                src={alexPortrait} 
                alt="Alex - Ägare av Alex Bil sedan 1976"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-retro border-8 border-chrome-light"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-righteous text-gradient-sunset mb-4">
              Möt Alex
            </h2>
            <div className="w-24 h-1 bg-gradient-sunset rounded-full mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed">
              Sedan 1976 har jag sålt bilar med stil och själ. För mig handlar det inte bara om fyra hjul och en motor — det handlar om känslan, historien, och minnet av när bilarna var riktiga personligheter.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Varje bil jag säljer har sin egen historia att berätta. Välkommen in för en pratstund och kanske hittar du din nästa klassiker.
            </p>
            <div className="mt-8">
              <p className="text-2xl font-pacifico text-primary">
                — Alex
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
