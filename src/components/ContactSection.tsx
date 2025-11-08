import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-righteous text-gradient-sunset mb-4">
            Kontakta Oss
          </h2>
          <div className="flex justify-center gap-3 mb-4">
            <div className="w-20 h-2 bg-gradient-chrome rounded-full"></div>
            <div className="w-20 h-2 bg-gradient-sunset rounded-full"></div>
            <div className="w-20 h-2 bg-gradient-chrome rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi finns här för dig — kom förbi eller hör av dig!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <Card className="shadow-retro hover:shadow-glow transition-all duration-300 bg-gradient-chrome border-4 border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 shadow-glow">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-righteous text-2xl text-retro-brown">Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a 
                href="tel:+46701234567" 
                className="text-xl font-bold text-retro-brown hover:text-primary transition-colors"
              >
                070-123 45 67
              </a>
              <p className="text-sm text-chrome-dark mt-2">Ring för mer info!</p>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="shadow-retro hover:shadow-glow transition-all duration-300 bg-gradient-chrome border-4 border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 shadow-glow">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-righteous text-2xl text-retro-brown">Adress</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-bold text-retro-brown">Retrovägen 76</p>
              <p className="text-lg font-bold text-retro-brown">123 45 Solstad</p>
              <p className="text-sm text-chrome-dark mt-2">Lätt att hitta!</p>
            </CardContent>
          </Card>

          {/* Opening Hours */}
          <Card className="shadow-retro hover:shadow-glow transition-all duration-300 bg-gradient-chrome border-4 border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 shadow-glow">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="font-righteous text-2xl text-retro-brown">Öppettider</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-bold text-retro-brown">Mån-Fre: 10-18</p>
              <p className="text-lg font-bold text-retro-brown">Lör: 11-15</p>
              <p className="text-lg font-bold text-retro-brown">Sön: Stängt</p>
              <p className="text-sm text-chrome-dark mt-2">Varmt välkommen!</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <p className="text-2xl font-pacifico text-gradient-sunset mb-4">
            Vi ser fram emot att höra från dig!
          </p>
          <p className="text-lg text-muted-foreground italic">
            Hos Alex Bil är det alltid 1976 — på det bästa sättet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
