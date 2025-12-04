import { Heart, Leaf, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Plantas Selecionadas",
      description: "Cada planta é cuidadosamente escolhida para garantir saúde e beleza ao seu espaço.",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Artesanato em macramê e peças decorativas criadas à mão com materiais de qualidade.",
    },
    {
      icon: Sparkles,
      title: "Peças Únicas",
      description: "Cada item é especial e único, trazendo personalidade para sua decoração.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-coral font-medium text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Verde que transforma
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A Floreiamô nasceu do amor pelas plantas e pela arte manual. Combinamos 
            natureza e artesanato para criar peças que encantam e transformam ambientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-background hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "35.9k", label: "Seguidores" },
            { value: "276+", label: "Publicações" },
            { value: "100%", label: "Artesanal" },
            { value: "2x", label: "Entregas/Semana" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
