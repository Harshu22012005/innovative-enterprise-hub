
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 4000);
    if (onClick) onClick();
  };

  return (
    <div className="relative inline-block">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("transition-transform duration-300 hover:scale-110", className)}
        onClick={handleClick}
      >
        <circle cx="20" cy="20" r="20" fill="#1E40AF" />
        <path
          d="M10 13H30V15H10V13ZM10 19H30V21H10V19ZM10 25H30V27H10V25Z"
          fill="white"
        />
        <path
          d="M20 6L24 10H16L20 6ZM20 34L16 30H24L20 34Z"
          fill="#F97316"
        />
      </svg>
      
      {clicked && (
        <>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                backgroundColor: i % 3 === 0 ? '#1E40AF' : i % 3 === 1 ? '#3B82F6' : '#F97316',
                left: `${10 + Math.random() * 20}px`,
                top: '0px',
                animationDelay: `${Math.random() * 0.5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Logo;
