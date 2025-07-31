interface FadeInProps {
  children: any;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 700, 
  className = "" 
}: FadeInProps) {
  return (
    <div 
      className={`animate-fade-in ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
} 