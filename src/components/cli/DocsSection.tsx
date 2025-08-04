import { ReactNode } from "react";
import { FadeIn } from "../animation/FadeIn";
import { Separator } from "@/components/ui/separator";

interface DocsSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  description?: string;
}

export function DocsSection({ title, children, id, description }: DocsSectionProps) {
  return (
    <section id={id} className="mb-12 px-2 sm:px-0">
      <FadeIn>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-300">{title}</h2>
        <Separator className="mb-6 bg-indigo-500/30" />
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p className="text-base sm:text-lg text-slate-300 mb-6">{description}</p>
        </FadeIn>
      )}
      <div className="space-y-6">{children}</div>
    </section>
  );
} 