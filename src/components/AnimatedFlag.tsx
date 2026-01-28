import { memo } from "react";

const AnimatedFlag = memo(() => {
  return (
    <div className="relative w-20 h-14 flex items-center justify-center group">
      {/* Green rectangle background with pulse animation */}
      <div
        className="absolute inset-0 bg-brazil-green rounded-sm animate-[pulse_3s_ease-in-out_infinite]"
        style={{ animationDelay: '0s' }}
      />

      {/* Yellow diamond with scale animation */}
      <div
        className="absolute inset-1 bg-brazil-yellow animate-[pulse_3s_ease-in-out_infinite]"
        style={{
          clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
          animationDelay: '0.5s'
        }}
      />

      {/* Blue circle with glow effect */}
      <div
        className="absolute w-6 h-6 rounded-full bg-brazil-blue animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(0,102,204,0.5)]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animationDelay: '1s'
        }}
      />

      {/* White band */}
      <div
        className="absolute bg-white/90 rounded-full"
        style={{
          width: '20px',
          height: '2px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-12deg)'
        }}
      />

      {/* Floating sparkle effect */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-brazil-yellow rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-brazil-green rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
    </div>
  );
});

AnimatedFlag.displayName = 'AnimatedFlag';

export default AnimatedFlag;
