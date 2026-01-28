import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { NiemeyerCurve, DiamondPattern } from "./BrazilianPatterns";
import PhotoCarousel from "./PhotoCarousel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brazil-green/15 rounded-full blur-[100px] animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brazil-yellow/10 rounded-full blur-[80px] animate-float animation-delay-400" />

        {/* Brazilian Modernist Pattern - Diamond Grid */}
        <DiamondPattern className="absolute inset-0 w-full h-full text-foreground opacity-30" />

        {/* Niemeyer-inspired Curves at Bottom */}
        <NiemeyerCurve className="absolute bottom-0 left-0 right-0 h-48 md:h-64" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              A casa dos construtores Solana no Brasil
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
            Construindo o futuro da{" "}
            <span className="gradient-text">Web3</span>{" "}
            no Brasil
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Conectamos desenvolvedores, fundadores, criadores e investidores
            para acelerar a adoção de Solana no maior mercado da América Latina.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Junte-se à comunidade
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              Explorar oportunidades
            </Button>
          </div>

          {/* Community Photo Carousel */}
          <div className="animate-fade-up animation-delay-500">
            <PhotoCarousel />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
