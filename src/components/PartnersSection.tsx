const SolanaLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 397.7 311.7" fill="currentColor">
    <linearGradient id="solanaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#9945FF" />
      <stop offset="50%" stopColor="#14F195" />
      <stop offset="100%" stopColor="#00D1FF" />
    </linearGradient>
    <path fill="url(#solanaGradient)" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"/>
    <path fill="url(#solanaGradient)" d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"/>
    <path fill="url(#solanaGradient)" d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"/>
  </svg>
);

const partners = [
  { name: "Solana", logo: <SolanaLogo /> },
  { name: "Phantom", logo: "👻" },
  { name: "Magic Eden", logo: "💎" },
  { name: "Jupiter", logo: "🪐" },
  { name: "Marinade", logo: "🥒" },
  { name: "Raydium", logo: "⚡" },
  { name: "Orca", logo: "🐋" },
  { name: "Jito", logo: "🔥" },
];

const PartnersSection = () => {
  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brazil-blue/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        {/* Honeycomb pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="none">
          <defs>
            <pattern id="partnersHex" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28,0 L56,16 L56,48 L28,64 L0,48 L0,16 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M28,68 L56,84 L56,116 L28,132 L0,116 L0,84 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partnersHex)" />
        </svg>
        {/* Decorative diamonds */}
        <div className="absolute top-10 left-10 w-8 h-8 rotate-45 border border-brazil-yellow/20" />
        <div className="absolute bottom-10 right-10 w-12 h-12 rotate-45 border border-primary/20" />
        <div className="absolute top-1/2 right-20 w-6 h-6 rotate-45 bg-primary/10" />
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full border border-brazil-green/15" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Ecossistema
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Parceiros & Projetos
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group glass-card p-6 flex flex-col items-center justify-center gap-3 hover-lift cursor-pointer"
            >
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                {typeof partner.logo === 'string' ? partner.logo : partner.logo}
              </span>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
