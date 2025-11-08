import CarCard from "./CarCard";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const cars = [
  {
    image: car1,
    title: "Volvo 240",
    year: 1978,
    price: "45 000 kr",
    description: "Klassisk svensk lastbil-sedan i fint skick. Pålitlig motor och nostalgisk charm."
  },
  {
    image: car2,
    title: "Saab 99",
    year: 1976,
    price: "38 000 kr",
    description: "Gul som solen! En riktig 70-tals klassiker med personlighet och stil."
  },
  {
    image: car3,
    title: "Mercedes-Benz W123",
    year: 1979,
    price: "62 000 kr",
    description: "Tidlös elegans i brunt. Tysk kvalitet som aldrig går ur tiden."
  }
];

const CarsSection = () => {
  return (
    <section id="bilar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-righteous text-gradient-sunset mb-4">
            Aktuella Bilar
          </h2>
          <div className="flex justify-center gap-3 mb-4">
            <div className="w-20 h-2 bg-gradient-sunset rounded-full"></div>
            <div className="w-20 h-2 bg-gradient-chrome rounded-full"></div>
            <div className="w-20 h-2 bg-gradient-sunset rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handplockade veteranbilar med historia och karaktär
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CarCard {...car} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            Nya bilar kommer in regelbundet — ring oss för att höra vad vi har just nu!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
