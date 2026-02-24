import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import ReactGA from "react-ga4";

const ContactSection = () => {

  const handleWhatsappClick = () => {
    ReactGA.event({
      category: "CTA",
      action: "Clique no WhatsApp",
      label: "Botão Fazer Pedido"
    });
  };


  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contato</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Entre em contato para fazer seu pedido ou tirar dúvidas. 
              Respondemos rapidinho! 💚
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-background">
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                  <p className="text-muted-foreground">Rua 214, 164 - Conj. São Cristóvão</p>
                  <p className="text-sm text-muted-foreground mt-1">Fortaleza - CE</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-background">
                <div className="w-12 h-12 rounded-lg bg-golden/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Entregas</h3>
                  <p className="text-muted-foreground">Quartas e Sextas</p>
                  <p className="text-sm text-muted-foreground mt-1">Fortaleza e região</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-background">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                  <p className="text-muted-foreground">Via WhatsApp ou Instagram</p>
                  <p className="text-sm text-muted-foreground mt-1">Resposta em até 24h</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                Pronto para transformar seu espaço?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Clique no botão abaixo e converse diretamente conosco pelo WhatsApp!
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/558596001460?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20plantas!" target="_blank" rel="noopener noreferrer" onClick={handleWhatsappClick}>
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
