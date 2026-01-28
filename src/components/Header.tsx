import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "#mission", label: "Missão", hoverColor: "hover:text-brazil-green" },
    { href: "#events", label: "Eventos", hoverColor: "hover:text-brazil-yellow" },
    { href: "/members", label: "Membros", hoverColor: "hover:text-brazil-blue" },
    { href: "#ecosystem", label: "Projetos", hoverColor: "hover:text-brazil-green" },
    { href: "#community", label: "Muro do amor", hoverColor: "hover:text-brazil-yellow" },
    { href: "#faq", label: "FAQ", hoverColor: "hover:text-brazil-blue" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-pulse-glow">
              Superteam Brasil
            </span>
            <div className="relative w-8 h-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-brazil-green rounded-[2px] animate-pulse" />
              <div
                className="absolute inset-[3px] bg-brazil-yellow animate-pulse"
                style={{ clipPath: 'polygon(50% 10%, 90% 50%, 50% 90%, 10% 50%)', animationDelay: '0.3s' }}
              />
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-brazil-blue animate-pulse shadow-[0_0_6px_rgba(0,102,204,0.6)]"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '0.6s' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-muted-foreground ${link.hoverColor} transition-colors font-medium`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors font-medium ${
                    isActive(link.href)
                      ? "text-primary"
                      : `text-muted-foreground ${link.hoverColor}`
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg">
              Junte-se a nós
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 px-4 py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button variant="hero" className="w-full mt-4">
              Junte-se a nós
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
