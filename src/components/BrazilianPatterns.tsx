// Elementos visuais brasileiros modernos inspirados na arquitetura de Oscar Niemeyer
// e no design gráfico brasileiro contemporâneo

export const NiemeyerCurve = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 200"
    fill="none"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M0 200 C100 200 150 50 200 50 C250 50 300 150 400 100 L400 200 Z"
      fill="url(#curveGradient)"
      opacity="0.5"
    />
    <path
      d="M0 200 C100 180 150 80 200 80 C250 80 300 160 400 130 L400 200 Z"
      fill="url(#curveGradient2)"
      opacity="0.3"
    />
    <defs>
      <linearGradient id="curveGradient" x1="0" y1="0" x2="400" y2="0">
        <stop offset="0%" stopColor="hsl(145 63% 42%)" stopOpacity="0.3" />
        <stop offset="50%" stopColor="hsl(51 100% 50%)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="hsl(210 100% 40%)" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="curveGradient2" x1="0" y1="0" x2="400" y2="0">
        <stop offset="0%" stopColor="hsl(271 91% 65%)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

export const ModernistGrid = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Padrão geométrico inspirado em Brasília */}
    <defs>
      <pattern id="modernistPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#modernistPattern)" />
  </svg>
);

export const DiamondPattern = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Losango inspirado na bandeira, estilizado de forma moderna */}
    <defs>
      <pattern id="diamondPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M20 5 L35 20 L20 35 L5 20 Z"
          fill="none"
          stroke="url(#diamondGradient)"
          strokeWidth="0.5"
          opacity="0.15"
        />
      </pattern>
      <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(145 63% 42%)" />
        <stop offset="50%" stopColor="hsl(51 100% 50%)" />
        <stop offset="100%" stopColor="hsl(210 100% 40%)" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#diamondPattern)" />
  </svg>
);

export const OrganicWave = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 1440 320"
    fill="none"
    className={className}
    preserveAspectRatio="none"
  >
    {/* Ondas orgânicas inspiradas nas praias brasileiras e Copacabana */}
    <path
      d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="url(#waveGradient)"
      opacity="0.1"
    />
    <path
      d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="url(#waveGradient2)"
      opacity="0.15"
    />
    <defs>
      <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="hsl(145 63% 42%)" />
        <stop offset="50%" stopColor="hsl(271 91% 65%)" />
        <stop offset="100%" stopColor="hsl(210 100% 40%)" />
      </linearGradient>
      <linearGradient id="waveGradient2" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="hsl(51 100% 50%)" />
        <stop offset="100%" stopColor="hsl(145 63% 42%)" />
      </linearGradient>
    </defs>
  </svg>
);

// Padrão de calçadão de Copacabana modernizado
export const CopacabanaPattern = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="copacabana" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M0 30 Q30 0 60 30 Q90 60 120 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.08"
        />
        <path
          d="M0 30 Q30 60 60 30 Q90 0 120 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.08"
        />
      </pattern>
    </defs>
    <rect width="120" height="60" fill="url(#copacabana)" />
  </svg>
);

// Separador inspirado em elementos brasileiros
export const BrazilianDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-brazil-green/30" />
    <div className="w-1.5 h-1.5 rounded-full bg-brazil-green/40" />
    <div className="w-2 h-2 rotate-45 border border-brazil-yellow/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-brazil-blue/40" />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-brazil-blue/30" />
  </div>
);

// Elemento decorativo de canto inspirado em azulejos brasileiros
export const AzulejoCorner = ({ className = "", position = "top-left" }: { className?: string; position?: string }) => {
  const rotations: Record<string, string> = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  return (
    <svg
      viewBox="0 0 80 80"
      className={`${className} ${rotations[position]}`}
      fill="none"
    >
      <path
        d="M0 0 L80 0 L80 20 Q40 20 40 60 L40 80 L20 80 Q20 40 60 40 L80 40 L80 80 L0 80 Z"
        fill="url(#azulejoGradient)"
        opacity="0.1"
      />
      <path
        d="M0 0 L40 0 L40 40 L0 40 Z"
        fill="none"
        stroke="url(#azulejoGradient)"
        strokeWidth="0.5"
        opacity="0.2"
      />
      <defs>
        <linearGradient id="azulejoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(210 100% 40%)" />
          <stop offset="100%" stopColor="hsl(271 91% 65%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
