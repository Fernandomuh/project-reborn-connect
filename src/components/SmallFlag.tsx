import { memo } from "react";

const SmallFlag = memo(() => {
  return (
    <div className="relative w-6 h-4 flex items-center justify-center">
      {/* Green rectangle background */}
      <div className="absolute inset-0 bg-brazil-green rounded-[2px]" />

      {/* Yellow diamond */}
      <div
        className="absolute inset-[2px] bg-brazil-yellow"
        style={{
          clipPath: 'polygon(50% 10%, 90% 50%, 50% 90%, 10% 50%)'
        }}
      />

      {/* Blue circle */}
      <div
        className="absolute w-2 h-2 rounded-full bg-brazil-blue"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
});

SmallFlag.displayName = 'SmallFlag';

export default SmallFlag;
