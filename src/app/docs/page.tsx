import { AnimatedSection } from "@/components/cli/AnimatedSection";
import { CodeBlock } from "@/components/cli/CodeBlock";
import { DocsSection } from "@/components/cli/DocsSection";
import { DocsNavigation } from "@/components/cli/DocsNavigation";
import { InfoCard } from "@/components/cli/InfoCard";
import Link from "next/link";

const navigationItems = [
  { id: "getting-started", title: "Getting Started", href: "#getting-started" },
  { id: "installation", title: "Installation", href: "#installation" },
  { id: "usage", title: "Usage", href: "#usage" },
  { id: "features", title: "Features", href: "#features" },
  { id: "configuration", title: "Configuration", href: "#configuration" },
  { id: "api-reference", title: "API Reference", href: "#api-reference" },
  { id: "examples", title: "Examples", href: "#examples" },
  { id: "troubleshooting", title: "Troubleshooting", href: "#troubleshooting" },
];

const features = [
  {
    title: "Interactive CLI",
    description: "Beautiful command-line interface with interactive prompts and real-time feedback.",
    icon: "💻",
  },
  {
    title: "Smart Package Detection",
    description: "Automatically detects and suggests relevant packages based on your project type.",
    icon: "🎯",
  },
  {
    title: "Zero Configuration",
    description: "Works out of the box with sensible defaults and minimal setup required.",
    icon: "⚡",
  },
  {
    title: "Cross-Platform",
    description: "Runs seamlessly on Windows, macOS, and Linux with consistent behavior.",
    icon: "🌐",
  },
  {
    title: "TypeScript Support",
    description: "Full TypeScript support with type definitions and IntelliSense integration.",
    icon: "🔷",
  },
  {
    title: "Open Source",
    description: "MIT licensed and available on GitHub for community contributions.",
    icon: "📖",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
      {/* Header */}
      <AnimatedSection>
        <div className="px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Complete guide to using package-installer-cli for effortless npm package management
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <DocsNavigation items={navigationItems} />
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Getting Started */}
            <DocsSection title="Getting Started" id="getting-started">
              <p className="text-lg text-slate-300 leading-relaxed">
                package-installer-cli is a powerful command-line tool that simplifies the process of 
                installing and managing npm packages. It provides an interactive interface for selecting 
                packages and automatically configures your project with the chosen dependencies.
              </p>
              
              <InfoCard type="info" title="Quick Start">
                <p>
                  Get up and running in seconds with our simple installation process. 
                  The CLI will guide you through each step with clear instructions and helpful prompts.
                </p>
              </InfoCard>
            </DocsSection>

            {/* Installation */}
            <DocsSection title="Installation" id="installation">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Install package-installer-cli globally or use it directly with npx. We recommend 
                using npx for the latest version without global installation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Using npx (Recommended)</h3>
                  <CodeBlock 
                    code="npx package-installer-cli"
                    language="bash"
                    title="Run directly with npx"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Global Installation</h3>
                  <CodeBlock 
                    code="npm install -g package-installer-cli"
                    language="bash"
                    title="Install globally"
                  />
                  <p className="text-sm text-slate-400 mt-2">
                    After global installation, you can run: <code className="text-green-300">package-installer-cli</code>
                  </p>
                </div>

                <InfoCard type="success" title="System Requirements">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Node.js 16.0 or higher</li>
                    <li>npm 7.0 or higher</li>
                    <li>Windows 10+, macOS 10.15+, or Linux</li>
                  </ul>
                </InfoCard>
              </div>
            </DocsSection>

            {/* Usage */}
            <DocsSection title="Usage" id="usage">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The CLI provides an intuitive interface for package management. Here's how to use it effectively.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Basic Usage</h3>
                  <CodeBlock 
                    code="npx package-installer-cli"
                    language="bash"
                    title="Start the interactive CLI"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Available Commands</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">install</h4>
                      <p className="text-sm text-slate-300">Install packages interactively</p>
                      <CodeBlock code="npx package-installer-cli install" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">list</h4>
                      <p className="text-sm text-slate-300">List available packages</p>
                      <CodeBlock code="npx package-installer-cli list" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">search</h4>
                      <p className="text-sm text-slate-300">Search for packages</p>
                      <CodeBlock code="npx package-installer-cli search react" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">help</h4>
                      <p className="text-sm text-slate-300">Show help information</p>
                      <CodeBlock code="npx package-installer-cli --help" language="bash" />
                    </div>
                  </div>
                </div>
              </div>
            </DocsSection>

            {/* Features */}
            <DocsSection title="Features" id="features">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Discover the powerful features that make package-installer-cli the perfect tool for 
                managing your npm dependencies.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <h3 className="font-bold text-lg text-indigo-300">{feature.title}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </DocsSection>

            {/* Configuration */}
            <DocsSection title="Configuration" id="configuration">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Customize the CLI behavior with configuration options and environment variables.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Configuration File</h3>
                  <p className="text-slate-300 mb-4">
                    Create a <code className="text-green-300">.package-installer.json</code> file in your project root:
                  </p>
                  <CodeBlock 
                    code={`{
  "defaultPackages": ["react", "react-dom"],
  "packageManager": "npm",
  "saveDev": false,
  "interactive": true
}`}
                    language="json"
                    title="Configuration example"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Environment Variables</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">PACKAGE_MANAGER</h4>
                      <p className="text-sm text-slate-300 mb-2">Set the default package manager (npm, yarn, pnpm)</p>
                      <CodeBlock code="export PACKAGE_MANAGER=yarn" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">SAVE_DEV</h4>
                      <p className="text-sm text-slate-300 mb-2">Default to save as dev dependency</p>
                      <CodeBlock code="export SAVE_DEV=true" language="bash" />
                    </div>
                  </div>
                </div>
              </div>
            </DocsSection>

            {/* API Reference */}
            <DocsSection title="API Reference" id="api-reference">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Programmatic API for integrating package-installer-cli into your own tools and scripts.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Install Function</h3>
                  <CodeBlock 
                    code={`import { install } from 'package-installer-cli';

const packages = await install(['react', 'react-dom'], {
  saveDev: false,
  packageManager: 'npm'
});`}
                    language="javascript"
                    title="Install packages programmatically"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Search Function</h3>
                  <CodeBlock 
                    code={`import { search } from 'package-installer-cli';

const results = await search('react', {
  limit: 10,
  includeDev: true
});`}
                    language="javascript"
                    title="Search for packages"
                  />
                </div>

                <InfoCard type="warning" title="Note">
                  <p>
                    The programmatic API is available when installing the package locally in your project. 
                    Make sure to handle errors appropriately in production code.
                  </p>
                </InfoCard>
              </div>
            </DocsSection>

            {/* Examples */}
            <DocsSection title="Examples" id="examples">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Common use cases and examples to help you get started quickly.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">React Project Setup</h3>
                  <CodeBlock 
                    code={`# Install React and common dependencies
npx package-installer-cli install react react-dom react-router-dom

# Install development dependencies
npx package-installer-cli install --save-dev @types/react @types/react-dom`}
                    language="bash"
                    title="Setting up a React project"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Node.js Backend</h3>
                  <CodeBlock 
                    code={`# Install Express and related packages
npx package-installer-cli install express cors helmet morgan

# Install development tools
npx package-installer-cli install --save-dev nodemon jest supertest`}
                    language="bash"
                    title="Setting up a Node.js backend"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">TypeScript Project</h3>
                  <CodeBlock 
                    code={`# Install TypeScript and type definitions
npx package-installer-cli install typescript @types/node

# Install additional type packages
npx package-installer-cli install @types/express @types/cors`}
                    language="bash"
                    title="Setting up TypeScript"
                  />
                </div>
              </div>
            </DocsSection>

            {/* Troubleshooting */}
            <DocsSection title="Troubleshooting" id="troubleshooting">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Common issues and their solutions to help you resolve problems quickly.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Permission Errors</h3>
                  <InfoCard type="warning" title="Global Installation Issues">
                    <p className="mb-3">
                      If you encounter permission errors when installing globally, try:
                    </p>
                    <CodeBlock 
                      code="sudo npm install -g package-installer-cli"
                      language="bash"
                      title="Install with sudo (Linux/macOS)"
                    />
                    <p className="text-sm text-slate-400 mt-2">
                      Or use npx instead: <code className="text-green-300">npx package-installer-cli</code>
                    </p>
                  </InfoCard>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Network Issues</h3>
                  <InfoCard type="info" title="Slow Downloads">
                    <p className="mb-3">
                      If downloads are slow, try switching to a different npm registry:
                    </p>
                    <CodeBlock 
                      code="npm config set registry https://registry.npmjs.org/"
                      language="bash"
                      title="Set npm registry"
                    />
                  </InfoCard>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Version Conflicts</h3>
                  <InfoCard type="warning" title="Package Version Issues">
                    <p>
                      If you encounter version conflicts, try clearing npm cache and reinstalling:
                    </p>
                    <CodeBlock 
                      code="npm cache clean --force && npm install"
                      language="bash"
                      title="Clear cache and reinstall"
                    />
                  </InfoCard>
                </div>
              </div>
            </DocsSection>

            {/* Links */}
            <div className="bg-slate-800/80 p-8 rounded-xl border border-indigo-500/30">
              <h2 className="text-2xl font-bold mb-6 text-indigo-300">Additional Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Official Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://github.com/0xshariq/package-installer-cli"
                        target="_blank"
                        rel="noopener"
                        className="text-indigo-300 hover:text-indigo-200 underline flex items-center gap-2"
                      >
                        📖 GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/package-installer-cli"
                        target="_blank"
                        rel="noopener"
                        className="text-indigo-300 hover:text-indigo-200 underline flex items-center gap-2"
                      >
                        📦 NPM Package
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Support</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://github.com/0xshariq/package-installer-cli/issues"
                        target="_blank"
                        rel="noopener"
                        className="text-indigo-300 hover:text-indigo-200 underline flex items-center gap-2"
                      >
                        🐛 Report Issues
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/0xshariq/package-installer-cli/discussions"
                        target="_blank"
                        rel="noopener"
                        className="text-indigo-300 hover:text-indigo-200 underline flex items-center gap-2"
                      >
                        💬 Community Discussions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
