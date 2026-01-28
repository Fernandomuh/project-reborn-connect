import { ArrowRight, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// Skill colors matching the Members page
const skillColors: Record<string, { bg: string; text: string }> = {
  "Rust": { bg: "bg-orange-500/15", text: "text-orange-400" },
  "Frontend": { bg: "bg-blue-500/15", text: "text-blue-400" },
  "Backend": { bg: "bg-purple-500/15", text: "text-purple-400" },
  "Design": { bg: "bg-pink-500/15", text: "text-pink-400" },
  "Conteúdo": { bg: "bg-amber-500/15", text: "text-amber-400" },
  "Crescimento": { bg: "bg-emerald-500/15", text: "text-emerald-400" },
};

const skillFilters = ["Todos", "Rust", "Frontend", "Backend", "Design", "Conteúdo", "Crescimento"];

const featuredMembers = [
  {
    name: "Lucas Silva",
    role: "Rust Developer",
    company: "Solana Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    twitter: "lucassilva",
    skill: "Rust",
  },
  {
    name: "Ana Costa",
    role: "Product Designer",
    company: "Magic Eden",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    twitter: "anacosta",
    skill: "Design",
  },
  {
    name: "Pedro Santos",
    role: "Full Stack Developer",
    company: "Phantom",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    twitter: "pedrosantos",
    skill: "Frontend",
  },
  {
    name: "Marina Oliveira",
    role: "Community Lead",
    company: "Superteam Brasil",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    twitter: "marinaoliveira",
    skill: "Crescimento",
  },
  {
    name: "Gabriel Lima",
    role: "Smart Contract Dev",
    company: "Marinade",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    twitter: "gabriellima",
    skill: "Rust",
  },
  {
    name: "Juliana Ferreira",
    role: "Growth Lead",
    company: "Jupiter",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    twitter: "julianaferreira",
    skill: "Crescimento",
  },
];

const MembersPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-brazil-yellow/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" preserveAspectRatio="none">
          <defs>
            <pattern id="membersGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#membersGrid)" />
        </svg>
        {/* Decorative circles */}
        <div className="absolute top-12 right-12 w-32 h-32 rounded-full border border-primary/15" />
        <div className="absolute bottom-16 left-16 w-20 h-20 rounded-full border border-brazil-green/15" />
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rotate-45 bg-brazil-yellow/10" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Comunidade
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Nossos membros
            </h2>
          </div>
          <Button asChild variant="glass" className="mt-4 sm:mt-0 group">
            <Link to="/members">
              Ver todos os membros
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Skills Filter Preview */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillFilters.map((skill) => {
            const colors = skillColors[skill];
            return (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  skill === "Todos"
                    ? "bg-primary text-primary-foreground"
                    : colors
                      ? `${colors.bg} ${colors.text} opacity-60 hover:opacity-100`
                      : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {skill}
              </span>
            );
          })}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMembers.map((member) => {
            const colors = skillColors[member.skill] || { bg: "bg-secondary", text: "text-secondary-foreground" };

            return (
              <div
                key={member.name}
                className="group glass-card p-6 hover-lift cursor-pointer relative"
              >
                <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                  {member.skill}
                </span>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold truncate group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {member.role}
                    </p>
                    <p className="text-sm text-primary truncate">
                      {member.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={`https://twitter.com/${member.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    @{member.twitter}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembersPreview;
