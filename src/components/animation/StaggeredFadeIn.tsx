import * as React from "react";
import { FadeIn } from "./FadeIn";

interface StaggeredFadeInProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export function StaggeredFadeIn({ 
  children, 
  staggerDelay = 100, 
  className = "" 
}: StaggeredFadeInProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn 
          key={index}
          delay={index * staggerDelay}
          className={className}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
} 