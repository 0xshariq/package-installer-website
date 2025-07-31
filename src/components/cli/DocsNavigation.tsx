import { motion } from "framer-motion";
import Link from "next/link";

interface NavItem {
  id: string;
  title: string;
  href: string;
}

interface DocsNavigationProps {
  items: NavItem[];
  currentSection?: string;
}

export function DocsNavigation({ items, currentSection }: DocsNavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-8"
    >
      <h3 className="text-lg font-semibold mb-4 text-indigo-300">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={item.href}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                currentSection === item.id
                  ? "bg-indigo-500/20 text-indigo-300 border-l-2 border-indigo-400"
                  : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800/50"
              }`}
            >
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
} 