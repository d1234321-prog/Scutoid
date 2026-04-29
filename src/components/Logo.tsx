import React from 'react';

export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img src="/logo.png" alt="Scutoid Development Logo" className="h-full w-auto object-contain fallback-logo" 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        if (target.nextElementSibling) {
          (target.nextElementSibling as HTMLElement).style.display = 'flex';
        }
      }} 
    />
    <div className="relative h-full aspect-[3/4] shrink-0 hidden fallback-svg">
      <svg viewBox="0 0 100 130" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25 L85 15 L35 45 L15 105 L65 125 L90 100" stroke="#1663a6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 25 L35 45 L15 105 Z" stroke="#1663a6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M85 15 L35 45 L65 125 Z" stroke="#1663a6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M85 15 L90 100 L65 125 M35 45 L90 100" stroke="#da291c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 105 L90 100" stroke="#da291c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    
    <div className="flex flex-col leading-none hidden sm:flex">
      <span className="font-display font-bold text-scutoid-blue text-[1.3rem] tracking-wider uppercase m-0 leading-tight">SCUTOID</span>
      <span className="font-display font-medium text-scutoid-blue text-[0.93rem] tracking-[0.15em] uppercase m-0 leading-tight">DEVELOPMENT</span>
    </div>
  </div>
);
