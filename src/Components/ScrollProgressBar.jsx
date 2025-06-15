import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);
    window.addEventListener('resize', calculateScrollProgress); // Handle window resize
    calculateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-[80px] left-0 w-full h-1.5 z-40">
      <div
        className="h-full bg-gradient-to-r from-[#22c55e] to-[#047a2e] transition-all duration-200 ease-out rounded-e-2xl"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;