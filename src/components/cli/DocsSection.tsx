import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DocsSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function DocsSection({ title, children, id }: DocsSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-indigo-300 border-b border-indigo-500/30 pb-2">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
} 