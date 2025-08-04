"use client";
import { useState } from "react";
import { FadeIn } from "../animation/FadeIn";
import { 
  Menubar, 
  MenubarContent, 
  MenubarItem, 
  MenubarMenu, 
  MenubarTrigger 
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation with Menubar */}
      <div className="lg:hidden mb-6">
        <FadeIn>
          <Menubar className="w-full bg-slate-800/80 border-indigo-500/30">
            <MenubarMenu>
              <MenubarTrigger className="w-full justify-between text-indigo-300 hover:text-indigo-200 hover:bg-slate-700/50">
                <span className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  Table of Contents
                </span>
              </MenubarTrigger>
              <MenubarContent className="w-56 bg-slate-800/95 border-indigo-500/30 backdrop-blur-sm">
                {items.map((item) => (
                  <MenubarItem
                    key={item.id}
                    className={`text-slate-300 hover:text-indigo-300 hover:bg-slate-700/50 cursor-pointer ${
                      currentSection === item.id
                        ? "bg-indigo-500/20 text-indigo-300"
                        : ""
                    }`}
                    onClick={handleItemClick}
                    asChild
                  >
                    <a href={item.href}>{item.title}</a>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </FadeIn>
      </div>

      {/* Desktop Navigation */}
      <nav className="sticky top-8 px-2 sm:px-0 hidden lg:block">
        <FadeIn>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-indigo-300">Table of Contents</h3>
        </FadeIn>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.07}>
              <li>
                <a
                  href={item.href}
                  className={`block px-2 sm:px-3 py-2 rounded-lg text-sm sm:text-base transition-all duration-200 hover:translate-x-1 ${
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
    </>
  );
}