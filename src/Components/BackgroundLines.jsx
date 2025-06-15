import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLines = ({ className }) => {
  // Center point for radial lines
  const centerX = 720;
  const centerY = 200;

  // Radial lines from center
  const lines = [
    { x1: centerX, y1: centerY, x2: centerX - 400, y2: centerY - 100 }, // Top-left
    { x1: centerX, y1: centerY, x2: centerX + 400, y2: centerY - 100 }, // Top-right
    { x1: centerX, y1: centerY, x2: centerX - 400, y2: centerY + 100 }, // Bottom-left
    { x1: centerX, y1: centerY, x2: centerX + 400, y2: centerY + 100 }, // Bottom-right
  ];

  // Circles for drifting pattern
  const circles = [
    { cx: 200, cy: 100, r: 50 }, // Left
    { cx: 1200, cy: 300, r: 70 }, // Right
    { cx: 600, cy: 200, r: 40 }, // Center
  ];

  // Color palette: blue, teal, purple with 20% opacity
  const colors = ['#3b82f633', '#2dd4bf33', '#8b5cf633', '#a78bfa33'];

  // Animation for radial lines (draw from center)
  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        pathLength: { duration: 4, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 },
        opacity: { duration: 4, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 },
      },
    },
  };

  // Animation for drifting circles (sinusoidal motion)
  const circleVariants = {
    animate: (idx) => ({
      x: [0, 30 * Math.cos(idx), -30 * Math.cos(idx), 0],
      y: [0, 15 * Math.sin(idx), -15 * Math.sin(idx), 0],
      opacity: [0.15, 0.35, 0.15],
      transition: {
        x: { duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: idx * 0.3 },
        y: { duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: idx * 0.3 },
        opacity: { duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: idx * 0.3 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 1440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
    >
      {/* Gradient background */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.05 }} />
          <stop offset="100%" style={{ stopColor: '#f0f7ff', stopOpacity: 0.02 }} />
        </radialGradient>
      </defs>
      <rect width="1440" height="400" fill="url(#bgGradient)" />

      {/* Radial lines */}
      {lines.map((line, idx) => (
        <motion.line
          key={`line-${idx}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={colors[idx]}
          strokeWidth="2"
          strokeLinecap="round"
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: idx * 0.2 }}
        />
      ))}

      {/* Drifting circles */}
      {circles.map((circle, idx) => (
        <motion.circle
          key={`circle-${idx}`}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill={colors[idx % colors.length]}
          custom={idx + 1}
          animate="animate"
          variants={circleVariants}
        />
      ))}
    </motion.svg>
  );
};

export default BackgroundLines;