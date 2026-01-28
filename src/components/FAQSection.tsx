import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a Superteam Brasil?",
    answer: "A Superteam Brasil é a comunidade oficial de construtores Solana no Brasil. Fazemos parte da rede global Superteam e nossa missão é conectar desenvolvedores, fundadores, criadores e investidores para acelerar a adoção de Solana no maior mercado da América Latina.",
  },
  {
    question: "Como me torno membro?",
    answer: "Para se tornar membro, basta se juntar ao nosso servidor Discord ou grupo Telegram. Lá você terá acesso a todas as oportunidades, eventos e poderá se conectar com outros membros da comunidade. Membros ativos podem se qualificar para posições no Core Team.",
  },
  {
    question: "Que oportunidades estão disponíveis?",
    answer: "Oferecemos diversas oportunidades incluindo: recompensas de desenvolvimento, subvenções para projetos inovadores, vagas de emprego em projetos Solana, mentoria com experts do ecossistema, e acesso a eventos exclusivos como hackathons e workshops.",
  },
  {
    question: "Como os projetos podem fazer parceria conosco?",
    answer: "Projetos interessados em parcerias podem entrar em contato através das nossas redes sociais ou Discord. Oferecemos suporte em recrutamento, marketing, eventos e conexões com a comunidade brasileira de desenvolvedores e usuários.",
  },
  {
    question: "Preciso ser um desenvolvedor para participar?",
    answer: "Não! A Superteam Brasil acolhe todos os perfis: desenvolvedores, designers, criadores de conteúdo, profissionais de marketing, desenvolvedores de negócios, e entusiastas. Se você tem interesse em Web3 e Solana, há espaço para você na nossa comunidade.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-brazil-yellow/15 rounded-full blur-[80px]" />
        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" preserveAspectRatio="none">
          <defs>
            <pattern id="faqDots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faqDots)" />
        </svg>
        {/* Decorative question marks abstraction */}
        <div className="absolute top-20 right-20 w-24 h-24 rounded-t-full border-t-2 border-l-2 border-r-2 border-primary/15" />
        <div className="absolute top-44 right-28 w-3 h-3 rounded-full bg-primary/15" />
        <div className="absolute bottom-20 left-16 w-16 h-16 rotate-45 border border-brazil-green/15" />
        <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full border border-brazil-blue/10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Perguntas Frequentes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
