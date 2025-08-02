import { ReactNode } from "react";
import { FadeIn } from "../animation/FadeIn";

interface DocsSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  description?: string;
}

export function DocsSection({ title, children, id, description }: DocsSectionProps) {
  return (
    <section id={id} className="mb-12">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-6 text-indigo-300 border-b border-indigo-500/30 pb-2">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p className="text-lg text-slate-300 mb-6">{description}</p>
        </FadeIn>
      )}
      <div className="space-y-6">{children}</div>
    </section>
  );
} 