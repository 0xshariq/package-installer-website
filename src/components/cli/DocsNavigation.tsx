"use client";
import { FadeIn } from "../animation/FadeIn";

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
    <nav className="sticky top-8">
      <FadeIn>
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">Table of Contents</h3>
      </FadeIn>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <FadeIn key={item.id} delay={idx * 0.07}>
            <li>
              <a
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:translate-x-1 ${
                  currentSection === item.id
                    ? "bg-indigo-500/20 text-indigo-300 border-l-2 border-indigo-400"
                    : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800/50"
                }`}
                aria-current={currentSection === item.id ? "true" : undefined}
              >
                {item.title}
              </a>
            </li>
          </FadeIn>
        ))}
      </ul>
    </nav>
  );
}