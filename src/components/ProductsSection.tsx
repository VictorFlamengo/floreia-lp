import { Button } from "@/components/ui/button";
import productMacrame from "@/assets/product-macrame.jpg";
import productJiboia from "@/assets/product-jiboia.jpg";
import productMacrame2 from "@/assets/product-macrame2.jpg";
import productPrateleira from "@/assets/product-prateleira.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: productMacrame2,
      title: "Suporte Macramê",
      category: "Artesanato",
      price: "A partir de R$ 45",
    },
    {
      image: productJiboia,
      title: "Suportes",
      category: "Artesanato",
      price: "A partir de R$ 25",
    },
    {
      image: productMacrame,
      title: "Vasos com Plantas",
      category: "Plantas",
      price: "A partir de R$ 35",
    },
    {
      image: productPrateleira,
      title: "Prateleira Macramê",
      category: "Artesanato",
      price: "A partir de R$ 100",
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-golden font-medium text-sm uppercase tracking-wider">Nossos Produtos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Destaques da loja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos nossos produtos mais amados. Para ver todo o catálogo, 
            visite nosso Instagram!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-2xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <span className="text-xs font-medium text-coral-light uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* Always visible on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                <h3 className="font-display text-sm font-semibold text-primary-foreground">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="golden" size="lg" asChild>
            <a href="https://instagram.com/floreiamo_" target="_blank" rel="noopener noreferrer">
              Ver mais no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
