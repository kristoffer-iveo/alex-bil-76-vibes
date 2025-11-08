import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CarsSection from "@/components/CarsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <CarsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
