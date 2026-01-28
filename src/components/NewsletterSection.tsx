import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brazil-yellow/15 rounded-full blur-[80px]" />
        {/* Mail icon pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
          <defs>
            <pattern id="newsletterPattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="35" y="35" width="10" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M35,35 L40,40 L45,35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletterPattern)" />
        </svg>
        {/* Decorative elements */}
        <div className="absolute top-8 right-16 w-20 h-20 rounded-full border border-primary/15" />
        <div className="absolute bottom-12 left-12 w-12 h-12 rotate-45 border border-brazil-green/15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card p-8 sm:p-12 gradient-border">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Receba atualizações sobre eventos, oportunidades e novidades do ecossistema Solana no Brasil.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-brazil-green"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Inscrição confirmada! Bem-vindo à comunidade.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                />
                <Button
                  type="submit"
                  variant="hero"
                  disabled={isLoading}
                  className="group"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Inscrever
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
