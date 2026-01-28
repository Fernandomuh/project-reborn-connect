import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const BrazilCursor = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 500, damping: 28 });
  const springY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [springX, springY]);

  // Determine color based on scroll position
  const getColor = () => {
    if (scrollProgress < 0.33) {
      return "hsl(var(--brazil-green))";
    } else if (scrollProgress < 0.66) {
      return "hsl(var(--brazil-yellow))";
    } else {
      return "hsl(var(--brazil-blue))";
    }
  };

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full"
          animate={{
            backgroundColor: getColor(),
            scale: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full blur-md opacity-50"
          animate={{
            backgroundColor: getColor(),
            scale: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};

export default BrazilCursor;
