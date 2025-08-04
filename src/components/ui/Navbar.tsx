import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-indigo-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Badge className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center p-0">
              <span className="text-white font-bold text-sm">CLI</span>
            </Badge>
            <span className="text-white font-semibold text-lg">package-installer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-slate-300 hover:text-indigo-300">
              <Link href="/">
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-slate-300 hover:text-indigo-300">
              <Link href="/docs">
                Documentation
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-slate-300 hover:text-indigo-300">
              <a 
                href="https://github.com/0xshariq/package-installer-cli" 
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-slate-300 hover:text-indigo-300">
              <a 
                href="https://www.npmjs.com/package/package-installer-cli" 
                target="_blank"
                rel="noopener"
              >
                NPM
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-slate-300 hover:text-indigo-300">
              <a 
                href="https://portfolio-sigma-rose-22.vercel.app/blog/package-installer-cli" 
                target="_blank"
                rel="noopener"
              >
                Blog
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="/docs">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-indigo-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}