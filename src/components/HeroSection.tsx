import { Button } from "@/components/ui/button";
import { MapPin, Truck } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";
import TextCursor from "./animations/textCursor";
import ReactGA from "react-ga4";

const HeroSection = () => {

  const handleWhatsappClick = () => {
    ReactGA.event({
      category: "CTA",
      action: "Clique no WhatsApp",
      label: "Botão Fazer Pedido"
    });
  };

  const handleInstagramClick = () => {
    ReactGA.event({
      category: "CTA",
      action: "Clique no Instagram",
      label: "Botão Ver no Instagram"
    });
  };

  return (
    <TextCursor text="🪴" spacing={80} maxPoints={10}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Plantas e macramês artesanais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-2 rounded-full mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Fortaleza - CE</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Floreiamô
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-display italic mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Plantas & Artesanato 🌱
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Transforme seu espaço com nossas plantas especiais e peças artesanais 
              feitas com amor. Macramês, prateleiras e muito verde para sua casa!
            </p>

            {/* Delivery Info */}
            <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Truck className="w-5 h-5 text-coral" />
              <span>Entregas às quartas e sextas</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/558596001460?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20plantas!" target="_blank" rel="noopener noreferrer" onClick={handleWhatsappClick}>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Whatsapp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://instagram.com/floreiamo_" target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick}>
                  Ver no Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </TextCursor>
  );
};

export default HeroSection;
