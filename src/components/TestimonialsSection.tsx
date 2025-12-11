import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Elainia Aprígio ",
    avatar: "EA",
    rating: 5,
    comment: "Eu fiquei apaixonada pela minha mão francesa com prateleira em macramê e pela minha espada-de-São-Jorge. Chegou tudo perfeito e muito bem embalado. Recomendo muito!",
    date: "há 2 dias",
    product: "Mão Francesa e Espada-de-São-Jorge"
  },
  {
    name: "Carolina Santos",
    avatar: "CS",
    rating: 5,
    comment: "O macramê ficou perfeito na minha varanda! Trabalho impecável e muito delicado. Já quero encomendar mais! 😍",
    date: "há 1 semana",
    product: "Suporte Macramê"
  },
  {
    name: "Bethy Nogueira",
    avatar: "BN",
    rating: 5,
    comment: "Essas plantas têm um poder incrível de trazer aconchego. Transformaram meu ambiente e deixaram tudo mais leve e acolhedor. Simplesmente apaixonado!",
    date: "há 2 semanas",
    product: "Zamioculca"
  },
  {
    name: "Érmerson Douglas",
    avatar: "ED",
    rating: 5,
    comment: "O esquema de pirâmide continua a todo vapor por aqui. Tô aprendendo a ser pai de planta e esse processo tem me ensinado tanto sobre a vida, sobre as vidas. Super indico essa loja que além de ter plantas lindas, tem um atendimento de muita qualidade. Eu amei!",
    date: "há 3 semanas",
    product: "Kit Suculentas"
  },
  {
    name: "Beatriz Mendes",
    avatar: "BM",
    rating: 5,
    comment: "A prateleira de macramê é uma obra de arte! Muito resistente e deixou meu cantinho das plantas muito mais charmoso.",
    date: "há 1 mês",
    product: "Prateleira Macramê"
  },
  {
    name: "Maria Mirella",
    avatar: "MM",
    rating: 5,
    comment: "Simplesmente encantada com a qualidade das peças! A prateleira em macramê ficou perfeita no meu cantinho e valorizou ainda mais minhas plantas. Dá pra ver o carinho em cada detalhe.",
    date: "há 1 mês",
    product: "Diversas plantas em Prateleira Macramê"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="feedbacks" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            O que dizem nossos clientes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Feedbacks com Amor 💚
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o que nos motiva a continuar levando verde e amor para cada lar
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 pb-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 h-full">
                    {/* Header with avatar and name */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">{testimonial.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/20 shrink-0" />
                    </div>

                    {/* Comment */}
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {testimonial.comment}
                    </p>

                    {/* Product tag */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        🌿 {testimonial.product}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Quer fazer parte dessa comunidade verde? 
          </p>
          <a
            href="https://instagram.com/floreiamo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
          >
            Siga-nos no Instagram @floreiamo
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;