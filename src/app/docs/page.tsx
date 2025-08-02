import { AnimatedSection } from "@/components/cli/AnimatedSection";
import { FadeIn } from "@/components/animation/FadeIn";
import { SlideUp } from "@/components/animation/SlideUp";
import { CodeBlock } from "@/components/cli/CodeBlock";
import { DocsSection } from "@/components/cli/DocsSection";
import { DocsNavigation } from "@/components/cli/DocsNavigation";
import { InfoCard } from "@/components/cli/InfoCard";
import Link from "next/link";

const navigationItems = [
  { id: "overview", title: "Overview", href: "#overview" },
  { id: "installation", title: "Installation", href: "#installation" },
  { id: "usage", title: "Usage", href: "#usage" },
  { id: "frameworks", title: "Supported Frameworks", href: "#frameworks" },
  { id: "templates", title: "Templates", href: "#templates" },
  { id: "examples", title: "Examples", href: "#examples" },
  { id: "development", title: "Development", href: "#development" },
  { id: "contributing", title: "Contributing", href: "#contributing" },
];

const frameworks = [
  {
    name: "Next.js",
    description: "React framework with SSR, SSG, and API routes",
    type: "Full-Stack",
    theme: "blue",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces",
    type: "Frontend",
    theme: "cyan",
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework",
    type: "Frontend",
    theme: "green",
  },
  {
    description: "Platform for building mobile and desktop web applications",
    name: "Angular",
    type: "Frontend",
    theme: "red",
  },
  {
    name: "Express.js",
    description: "Fast, unopinionated web framework for Node.js",
    type: "Backend",
    theme: "green",
  },
  {
    name: "Remix",
    description: "Full stack web framework focused on web standards",
    type: "Frontend",
    theme: "blue",
  },
  {
    name: "NestJS",
    description: "Progressive Node.js framework for building scalable applications",
    type: "Backend",
    theme: "magenta",
  },
  {
    name: "Rust",
    description: "Systems programming language with memory safety",
    type: "Backend",
    theme: "yellow",
  },
];

const steps = [
  {
    title: "Install CLI",
    description: "Run 'npx package-installer-cli' in your terminal.",
    code: "npx package-installer-cli",
  },
  {
    title: "Choose Packages",
    description: "Select and install npm packages interactively.",
  },
  {
    title: "Enjoy!",
    description: "Your project is ready with all dependencies installed.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white px-4 py-8 md:py-16">
      {/* Header */}
      <AnimatedSection>
        <FadeIn>
          <section className="text-center mb-10 px-2 md:px-0">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </h1>
          </section>
        </FadeIn>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <DocsNavigation items={navigationItems} />
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <DocsSection title="Overview" id="overview">
              <p className="text-lg text-slate-300 leading-relaxed">
                Package Installer CLI (pi) is a modern, cross-platform CLI tool designed to scaffold web applications
                with beautiful styling, interactive prompts, and comprehensive framework support. Create production-ready
                projects in seconds with the ultimate developer experience.
              </p>

              <InfoCard type="info" title="Key Features">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>10+ Frameworks:</strong> Next.js, React, Vue, Angular, Express, Rust, Remix, NestJS</li>
                  <li><strong>Language Support:</strong> JavaScript & TypeScript</li>
                  <li><strong>UI Libraries:</strong> Shadcn/ui, Material-UI, Headless UI</li>
                  <li><strong>Bundler Options:</strong> Vite and more</li>
                  <li><strong>Cross-platform:</strong> Windows, macOS, Linux, WSL</li>
                  <li><strong>Dual Commands:</strong> Use `pi` or `package-installer`</li>
                </ul>
              </InfoCard>
            </DocsSection>

            {/* Installation */}
            <DocsSection title="Installation" id="installation">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Install Package Installer CLI globally or use it directly with npx. We recommend using npx for the latest version.
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
                    After global installation, you can use: <code className="text-green-300">pi</code> or <code className="text-green-300">package-installer</code>
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
                The CLI provides an intuitive interface for scaffolding web applications. Here are the basic commands.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Basic Usage</h3>
                  <CodeBlock
                    code="pi"
                    language="bash"
                    title="Start the interactive scaffolder"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Available Commands</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Basic Scaffolding</h4>
                      <p className="text-sm text-slate-300">Create a new project interactively</p>
                      <CodeBlock code="pi" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Named Project</h4>
                      <p className="text-sm text-slate-300">Create project with specific name</p>
                      <CodeBlock code="pi my-awesome-app" language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Current Directory</h4>
                      <p className="text-sm text-slate-300">Use current directory name</p>
                      <CodeBlock code="pi ." language="bash" />
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Full Command</h4>
                      <p className="text-sm text-slate-300">Use full command name</p>
                      <CodeBlock code="package-installer my-react-app" language="bash" />
                    </div>
                  </div>
                </div>
              </div>
            </DocsSection>

            {/* Supported Frameworks */}
            <DocsSection title="Supported Frameworks" id="frameworks">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Package Installer CLI supports a wide range of frameworks and technologies for building modern web applications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {frameworks.map((framework) => (
                  <div
                    key={framework.name}
                    className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-indigo-300">{framework.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        framework.type === 'Frontend' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                      }`}>
                        {framework.type}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{framework.description}</p>
                  </div>
                ))}
              </div>

              <InfoCard type="info" title="Framework Types">
                <p className="mb-3">
                  Frameworks are categorized by their primary use case:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Frontend:</strong> User interface frameworks and libraries</li>
                  <li><strong>Backend:</strong> Server-side frameworks and APIs</li>
                  <li><strong>Fullstack:</strong> Complete application frameworks</li>
                </ul>
              </InfoCard>
            </DocsSection>

            {/* Templates */}
            <DocsSection title="Templates" id="templates">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Each framework comes with multiple template options to suit different project requirements.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Template Types</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Basic Templates</h4>
                      <p className="text-sm text-slate-300">Simple, clean structure for getting started</p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Advanced Templates</h4>
                      <p className="text-sm text-slate-300">Full-featured, production-ready setups</p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">Combination Templates</h4>
                      <p className="text-sm text-slate-300">Pre-configured full-stack setups</p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30">
                      <h4 className="font-semibold text-indigo-300 mb-2">UI Library Integration</h4>
                      <p className="text-sm text-slate-300">Templates with Shadcn/ui, Material-UI</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Example: React + Express + Shadcn</h3>
                  <CodeBlock
                    code={`📋 Choose your template:
❯ react-basic-express-shadcn-template (Pre-configured setup)
  react-advance-express-shadcn-template (Pre-configured setup)

📋 Template includes:
  ✅ Shadcn/ui components
  ✅ Express.js backend
  ✅ React.js frontend
  💡 All configurations are pre-configured for optimal setup!`}
                    language="bash"
                    title="Combination template selection"
                  />
                </div>
              </div>
            </DocsSection>

            {/* Examples */}
            <DocsSection title="Examples" id="examples">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Common use cases and examples to help you get started quickly.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Next.js Project</h3>
                  <CodeBlock
                    code={`# Create a Next.js project
pi my-next-app

# Choose framework: Next.js
# Choose language: TypeScript
# Choose template: Basic with Shadcn/ui
# Choose styling: Tailwind CSS`}
                    language="bash"
                    title="Creating a Next.js project"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Full-Stack Application</h3>
                  <CodeBlock
                    code={`# Create a full-stack app
pi my-fullstack-app

# Choose combination template
# React + Express + Shadcn/ui
# TypeScript throughout
# Auto dependency installation`}
                    language="bash"
                    title="Creating a full-stack application"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Rust Backend</h3>
                  <CodeBlock
                    code={`# Create a Rust project
pi my-rust-service

# Choose framework: Rust
# Choose template: Advanced
# Cargo commands will be shown`}
                    language="bash"
                    title="Creating a Rust backend"
                  />
                </div>
              </div>
            </DocsSection>

            {/* Development */}
            <DocsSection title="Development" id="development">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Information for developers who want to contribute to Package Installer CLI.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Local Development</h3>
                  <CodeBlock
                    code={`# Clone the repository
git clone https://github.com/0xshariq/package-installer-cli.git
cd package-installer-cli

# Install dependencies
npm install

# Build the project
npm run build

# Run locally
node dist/index.js`}
                    language="bash"
                    title="Setting up development environment"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Project Structure</h3>
                  <CodeBlock
                    code={`package-installer-cli/
├── src/
│   └── index.ts          # Main CLI logic with enhanced styling
├── templates/            # Template directories
│   ├── nextjs/
│   ├── reactjs/
│   ├── vuejs/
│   ├── angularjs/
│   ├── expressjs/
│   ├── remixjs/
│   ├── nestjs/
│   ├── rust/
│   └── reactjs-expressjs-shadcn/
├── template.json         # Framework configurations
├── dist/                 # Compiled JavaScript
└── package.json`}
                    language="bash"
                    title="Project structure"
                  />
                </div>
              </div>
            </DocsSection>

            {/* Contributing */}
            <DocsSection title="Contributing" id="contributing">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We welcome contributions! Here's how to get started with contributing to Package Installer CLI.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Getting Started</h3>
                  <CodeBlock
                    code={`# Fork the repository
# Create your feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request`}
                    language="bash"
                    title="Contribution workflow"
                  />
                </div>

                <InfoCard type="info" title="Development Guidelines">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Follow TypeScript best practices</li>
                    <li>Add proper error handling</li>
                    <li>Include emoji and styling for new features</li>
                    <li>Update documentation for new frameworks</li>
                    <li>Test on multiple platforms</li>
                    <li>Add comprehensive comments to code</li>
                  </ul>
                </InfoCard>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Adding New Frameworks</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Update <code className="text-green-300">template.json</code> with framework configuration</li>
                    <li>Create template directory in <code className="text-green-300">templates/</code></li>
                    <li>Add framework theme in <code className="text-green-300">getFrameworkTheme()</code></li>
                    <li>Update documentation in README.md</li>
                    <li>Test thoroughly on different platforms</li>
                  </ol>
                </div>
              </div>
            </DocsSection>

            {/* Steps Overview */}
            <AnimatedSection>
              <FadeIn>
                <div className="text-center mb-10 px-2 md:px-0">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-indigo-300">
                    Quick Start Steps
                  </h2>
                </div>
              </FadeIn>
              <SlideUp>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {steps.map((step, idx) => (
                    <FadeIn key={step.title} delay={idx * 0.15}>
                      <div className="bg-slate-800/80 p-6 rounded-xl shadow-lg border border-indigo-500/30">
                        <h3 className="font-bold text-lg mb-2 text-indigo-300">{step.title}</h3>
                        <p className="mb-2 opacity-90">{step.description}</p>
                        {step.code && <pre className="bg-black/40 p-2 rounded text-green-300 text-sm"><code>{step.code}</code></pre>}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </SlideUp>
            </AnimatedSection>

            {/* Links */}
            <AnimatedSection>
              <FadeIn>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-2">Links</h2>
                  <ul className="list-disc ml-6">
                    <li><a href="https://github.com/0xshariq/package-installer-cli" target="_blank" rel="noopener" className="text-indigo-300 underline">GitHub Repository</a></li>
                    <li><a href="https://www.npmjs.com/package/package-installer-cli" target="_blank" rel="noopener" className="text-indigo-300 underline">NPM Package</a></li>
                    <li><a href="https://portfolio-sigma-rose-22.vercel.app/blog/package-installer-cli" target="_blank" rel="noopener" className="text-indigo-300 underline">Blog</a></li>
                  </ul>
                </div>
              </FadeIn>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
