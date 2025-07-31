interface HoverScaleProps {
  children: any;
  scale?: number;
  y?: number;
  className?: string;
}

export function HoverScale({ 
  children, 
  scale = 1.05, 
  y = -5, 
  className = "" 
}: HoverScaleProps) {
  return (
    <div 
      className={`transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${className}`}
      style={{
        '--hover-scale': scale,
        '--hover-y': `${y}px`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
} 