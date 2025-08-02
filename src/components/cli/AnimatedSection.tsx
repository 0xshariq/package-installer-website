import { StaggerChildren } from "../animation/StaggerChildren";
import { FadeIn } from "../animation/FadeIn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function AnimatedSection({ children, title, description, className = "" }: AnimatedSectionProps) {
  return (
    <section className={`my-12 md:my-16 ${className}`}>
      {title && (
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-300">{title}</h2>
        </FadeIn>
      )}
      {description && (
        <FadeIn delay={0.1}>
          <p className="text-lg text-slate-300 mb-6">{description}</p>
        </FadeIn>
      )}
      <StaggerChildren>
        {children}
      </StaggerChildren>
    </section>
  );
}
