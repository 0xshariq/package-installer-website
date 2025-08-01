import { ReactNode } from "react";

interface DocsSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function DocsSection({ title, children, id }: DocsSectionProps) {
  return (
    <section
      id={id}
      className="mb-12 animate-fade-in"
    >
      <h2 className="text-2xl font-bold mb-6 text-indigo-300 border-b border-indigo-500/30 pb-2">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
} 