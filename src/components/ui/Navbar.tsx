import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-indigo-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CLI</span>
            </div>
            <span className="text-white font-semibold text-lg">package-installer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-indigo-300 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/docs" 
              className="text-slate-300 hover:text-indigo-300 transition-colors duration-200"
            >
              Documentation
            </Link>
            <a 
              href="https://github.com/0xshariq/package-installer-cli" 
              target="_blank"
              rel="noopener"
              className="text-slate-300 hover:text-indigo-300 transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/package-installer-cli" 
              target="_blank"
              rel="noopener"
              className="text-slate-300 hover:text-indigo-300 transition-colors duration-200"
            >
              NPM
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/docs"
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-indigo-300 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 