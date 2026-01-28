import { useEffect, useState, useRef } from "react";
import { OrganicWave } from "./BrazilianPatterns";

const stats = [
  { value: 500, suffix: "+", label: "Membros ativos" },
  { value: 50, suffix: "+", label: "Eventos realizados" },
  { value: 100, suffix: "+", label: "Recompensas completadas" },
  { value: 10, suffix: "M+", label: "PIB" },
  { value: 2500, suffix: "+", label: "Tamanho da comunidade" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Organic Wave Background */}
      <OrganicWave className="absolute bottom-0 left-0 right-0 h-full" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-8 sm:p-12 brazil-glow relative overflow-hidden">
          {/* Decorative Diamond Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 rotate-45 border border-brazil-green/30" />
          <div className="absolute top-4 right-4 w-3 h-3 rotate-45 border border-brazil-yellow/30" />
          <div className="absolute bottom-4 left-4 w-3 h-3 rotate-45 border border-brazil-blue/30" />
          <div className="absolute bottom-4 right-4 w-3 h-3 rotate-45 border border-primary/30" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                {...stat}
                isVisible={isVisible}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

const StatItem = ({ value, suffix, label, isVisible, delay }: StatItemProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(value, 2000, shouldAnimate);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className="text-center relative">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text stat-counter mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
      {/* Subtle underline accent */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-brazil-green/30 via-brazil-yellow/30 to-brazil-blue/30 rounded-full" />
    </div>
  );
};

export default StatsSection;
