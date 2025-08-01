import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900/80 border-t border-indigo-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CLI</span>
              </div>
              <span className="text-white font-semibold text-lg">package-installer</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Effortlessly install and manage npm packages with an intelligent, interactive CLI tool. 
              Get started in seconds with zero configuration required.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/0xshariq/package-installer-cli" 
                target="_blank"
                rel="noopener"
                className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.npmjs.com/package/package-installer-cli" 
                target="_blank"
                rel="noopener"
                className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-10.454v3.456h7.008v6.953h-6.937z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-indigo-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-slate-400 hover:text-indigo-300 transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/issues" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/discussions" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/blob/main/README.md" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  README
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/blob/main/CHANGELOG.md" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/blob/main/LICENSE" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  License
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/0xshariq/package-installer-cli/contributors" 
                  target="_blank"
                  rel="noopener"
                  className="text-slate-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  Contributors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-indigo-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 package-installer-cli. MIT Licensed.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Made with ❤️ by <a 
              href="https://github.com/0xshariq" 
              target="_blank"
              rel="noopener"
              className="text-indigo-300 hover:text-indigo-200"
            >
              0xshariq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 