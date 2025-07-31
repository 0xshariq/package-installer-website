import * as React from "react";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 700, 
  className = "" 
}: SlideInProps) {
  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(20px)";
      case "down":
        return "translateY(-20px)";
      case "left":
        return "translateX(20px)";
      case "right":
        return "translateX(-20px)";
      default:
        return "translateY(20px)";
    }
  };

  return (
    <div 
      className={`animate-slide-in ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        '--slide-transform': getTransform()
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
} 