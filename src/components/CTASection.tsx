import { MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-brazil-green/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brazil-yellow/15 rounded-full blur-[100px]" />
        {/* Rocket/launch pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" preserveAspectRatio="none">
          <defs>
            <pattern id="ctaPattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,20 L55,35 L50,50 L45,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="50" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>
        {/* Decorative geometric elements */}
        <div className="absolute top-16 left-16 w-24 h-24 rotate-45 border border-primary/15" />
        <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full border border-brazil-blue/15" />
        <div className="absolute top-1/3 right-24 w-8 h-8 rotate-45 bg-brazil-yellow/10" />
        <div className="absolute bottom-1/3 left-24 w-6 h-6 rotate-12 bg-primary/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 sm:p-12 lg:p-16 gradient-border">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para{" "}
              <span className="gradient-text">construir</span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Junte-se à maior comunidade de construtores Solana do Brasil
              e faça parte do futuro da Web3 na América Latina.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Junte-se ao Discord
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                Entre no Telegram
                <Send className="w-5 h-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
