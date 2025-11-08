import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CarCardProps {
  image: string;
  title: string;
  year: number;
  price: string;
  description: string;
}

const CarCard = ({ image, title, year, price, description }: CarCardProps) => {
  return (
    <Card className="overflow-hidden shadow-retro hover:shadow-glow transition-all duration-300 hover:scale-105 retro-border bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardHeader className="bg-gradient-chrome">
        <CardTitle className="font-righteous text-2xl text-retro-brown">{title}</CardTitle>
        <CardDescription className="text-chrome-dark font-bold text-lg">
          Årsmodell {year}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-righteous text-gradient-sunset">
            {price}
          </span>
          <Button 
            variant="secondary"
            className="bg-gradient-sunset hover:opacity-90 text-primary-foreground font-bold shadow-retro"
          >
            <Phone className="mr-2 h-4 w-4" />
            Ring oss
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
