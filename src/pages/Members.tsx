import { useState } from "react";
import { Search, Twitter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Cores para cada habilidade
const skillColors: Record<string, { bg: string; text: string; ring: string }> = {
  "Rust": { bg: "bg-orange-500/15", text: "text-orange-400", ring: "ring-orange-500/30" },
  "Frontend": { bg: "bg-blue-500/15", text: "text-blue-400", ring: "ring-blue-500/30" },
  "Backend": { bg: "bg-purple-500/15", text: "text-purple-400", ring: "ring-purple-500/30" },
  "Design": { bg: "bg-pink-500/15", text: "text-pink-400", ring: "ring-pink-500/30" },
  "Conteúdo": { bg: "bg-amber-500/15", text: "text-amber-400", ring: "ring-amber-500/30" },
  "Crescimento": { bg: "bg-emerald-500/15", text: "text-emerald-400", ring: "ring-emerald-500/30" },
};

// Ordem de prioridade para ordenação
const skillOrder = ["Rust", "Frontend", "Backend", "Design", "Conteúdo", "Crescimento"];

const getMainSkill = (skills: string[]) => {
  for (const skill of skillOrder) {
    if (skills.includes(skill)) return skill;
  }
  return skills[0];
};

const allMembers = [
  { name: "Lucas Silva", role: "Rust Developer", company: "Solana Labs", skills: ["Rust", "Backend"], twitter: "lucassilva", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { name: "Gabriel Lima", role: "Smart Contract Dev", company: "Marinade", skills: ["Rust", "Backend"], twitter: "gabriellima", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
  { name: "Henrique Martins", role: "Blockchain Dev", company: "Drift", skills: ["Rust", "Backend"], twitter: "henriquemartins", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
  { name: "Rafael Mendes", role: "Tech Lead", company: "Superteam Brasil", skills: ["Frontend", "Rust"], twitter: "rafaelmendes", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
  { name: "Pedro Santos", role: "Full Stack Developer", company: "Phantom", skills: ["Frontend", "Backend"], twitter: "pedrosantos", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
  { name: "Bruno Almeida", role: "Frontend Developer", company: "Orca", skills: ["Frontend"], twitter: "brunoalmeida", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face" },
  { name: "Marcos Oliveira", role: "Full Stack Dev", company: "Helius", skills: ["Frontend", "Backend"], twitter: "marcosoliveira", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" },
  { name: "Diego Nascimento", role: "Backend Developer", company: "Raydium", skills: ["Backend", "Rust"], twitter: "diegonascimento", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face" },
  { name: "Ana Costa", role: "Product Designer", company: "Magic Eden", skills: ["Design"], twitter: "anacosta", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
  { name: "Camila Rodrigues", role: "UX Designer", company: "Jito", skills: ["Design"], twitter: "camilarodrigues", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
  { name: "Larissa Costa", role: "UI Designer", company: "Magic Eden", skills: ["Design"], twitter: "larissacosta", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face" },
  { name: "Fernanda Souza", role: "Content Creator", company: "Freelancer", skills: ["Conteúdo"], twitter: "fernandasouza", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face" },
  { name: "Juliana Ferreira", role: "Growth Lead", company: "Jupiter", skills: ["Crescimento", "Conteúdo"], twitter: "julianaferreira", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" },
  { name: "Marina Oliveira", role: "Community Lead", company: "Superteam Brasil", skills: ["Crescimento"], twitter: "marinaoliveira", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
  { name: "Isabella Santos", role: "Marketing Lead", company: "Tensor", skills: ["Crescimento"], twitter: "isabellasantos", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face" },
  { name: "João Pedro", role: "DevRel", company: "Solana Foundation", skills: ["Crescimento", "Conteúdo"], twitter: "joaopedro", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop&crop=face" },
];

const skillFilters = ["Todos", "Rust", "Frontend", "Backend", "Design", "Conteúdo", "Crescimento"];

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredMembers = allMembers
    .filter((member) => {
      const searchLower = searchQuery.toLowerCase().trim();
      
      // Check if search matches name, role, company, or any skill
      const matchesSearch = searchLower === "" ||
        member.name.toLowerCase().includes(searchLower) ||
        member.role.toLowerCase().includes(searchLower) ||
        member.company.toLowerCase().includes(searchLower) ||
        member.skills.some(skill => skill.toLowerCase().includes(searchLower));

      const matchesFilter =
        activeFilter === "Todos" ||
        member.skills.includes(activeFilter);

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      const aMainSkill = getMainSkill(a.skills);
      const bMainSkill = getMainSkill(b.skills);
      const aIndex = skillOrder.indexOf(aMainSkill);
      const bIndex = skillOrder.indexOf(bMainSkill);
      return aIndex - bIndex;
    });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Nossos</span> <span className="gradient-text">Membros</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Conheça os construtores que fazem parte da Superteam Brasil.
              Desenvolvedores, designers, criadores e líderes do ecossistema Solana.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar membros por nome, cargo, empresa ou habilidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Skill Filters */}
            <div className="flex flex-wrap gap-2">
              {skillFilters.map((skill) => {
                const colors = skillColors[skill];
                const isActive = activeFilter === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => setActiveFilter(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? skill === "Todos"
                          ? "bg-primary text-primary-foreground"
                          : colors
                            ? `${colors.bg} ${colors.text} ring-1 ${colors.ring}`
                            : "bg-primary text-primary-foreground"
                        : colors
                          ? `${colors.bg} ${colors.text} opacity-60 hover:opacity-100`
                          : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Members Count */}
          <p className="text-muted-foreground mb-6">
            Mostrando {filteredMembers.length} de {allMembers.length} membros
          </p>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => {
              const mainSkill = getMainSkill(member.skills);
              const colors = skillColors[mainSkill] || { bg: "bg-secondary", text: "text-secondary-foreground", ring: "ring-border" };

              return (
                <div
                  key={member.name}
                  className="group glass-card p-6 hover-lift cursor-pointer relative"
                >
                  <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                    {mainSkill}
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

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {member.skills.map((skill) => {
                      const skillColor = skillColors[skill];
                      return (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-md text-xs ${skillColor ? `${skillColor.bg} ${skillColor.text}` : "bg-secondary text-secondary-foreground"}`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  {/* Twitter */}
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

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum membro encontrado com esses critérios.
              </p>
              <Button
                variant="glass"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("Todos");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Members;
