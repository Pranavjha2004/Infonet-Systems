import React, { useEffect, useRef } from "react";

export const Meteors = ({ number = 20 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const meteors = Array.from({ length: number }).map((_, index) => {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.animationDelay = `${Math.random() * 5}s`;
      meteor.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(meteor);
      return meteor;
    });

    return () => {
      meteors.forEach((meteor) => container.removeChild(meteor));
    };
  }, [number]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <style>{`
        .meteor {
          position: absolute;
          top: -10px;
          width: 2px;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), transparent);
          animation-name: meteor-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes meteor-fall {
          0% {
            transform: translateY(0) translateX(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(800px) translateX(-200px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
