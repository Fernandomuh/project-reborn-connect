import { Users, Calendar, Coins, Briefcase, GraduationCap, Network } from "lucide-react";
import { CopacabanaPattern, BrazilianDivider } from "./BrazilianPatterns";

const pillars = [
  {
    icon: Users,
    title: "Suporte & Mentoria",
    description: "Conectamos construtores com mentores experientes do ecossistema Solana para acelerar seu crescimento.",
  },
  {
    icon: Calendar,
    title: "Eventos",
    description: "Organizamos hackathons, meetups e conferências para unir a comunidade e fomentar colaboração.",
  },
  {
    icon: Coins,
    title: "Subsídios & Financiamento",
    description: "Facilitamos acesso a subsídios e oportunidades de financiamento para projetos promissores.",
  },
  {
    icon: Briefcase,
    title: "Empregos & Recompensas",
    description: "Conectamos talentos com oportunidades de trabalho e recompensas no ecossistema Web3.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Oferecemos workshops e materiais educacionais para desenvolvedores de todos os níveis.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Criamos conexões valiosas entre fundadores, investidores e construtores do ecossistema.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      {/* Copacabana Wave Pattern Background */}
      <div className="absolute inset-0 opacity-50">
        <CopacabanaPattern className="w-full h-full text-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossa Missão
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O que fazemos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A Superteam Brasil é o hub central para construtores Solana,
            oferecendo suporte completo para transformar ideias em projetos de sucesso.
          </p>
          <BrazilianDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group glass-card p-6 hover-lift cursor-default relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute top-2 right-2 w-8 h-8 border-t border-r border-primary/20 rounded-tr-lg"
                />
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative">
                <pillar.icon className="w-6 h-6 text-primary" />
                {/* Geometric accent */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rotate-45 border border-brazil-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
