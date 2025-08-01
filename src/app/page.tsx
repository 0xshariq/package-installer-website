import FeatureCard from "@/components/cli/FeatureCard";
import UsageSteps from "@/components/cli/UsageSteps";
import { AnimatedSection } from "@/components/cli/AnimatedSection";
import Link from "next/link";

const features = [
	{
		title: "10+ Frameworks",
		description: "Next.js, React, Vue, Angular, Express, Rust, Remix, NestJS with full TypeScript support.",
		icon: "🚀",
	},
	{
		title: "Beautiful Styling",
		description: "Gradient colors, styled boxes, enhanced UX with interactive prompts and real-time feedback.",
		icon: "🎨",
	},
	{
		title: "Cross-Platform",
		description: "Works seamlessly on Windows, macOS, Linux, WSL with consistent behavior across platforms.",
		icon: "🌐",
	},
	{
		title: "Fast Scaffolding",
		description: "Get started in seconds with production-ready projects and comprehensive framework support.",
		icon: "⚡",
	},
	{
		title: "UI Libraries",
		description: "Shadcn/ui, Material-UI, Headless UI integration with pre-configured setups.",
		icon: "🧩",
	},
	{
		title: "Smart Templates",
		description: "Combination templates with pre-configured full-stack setups and auto dependency installation.",
		icon: "🎯",
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
			{/* Hero Section */}
			<AnimatedSection>
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
					<div className="text-center mb-10">
						<h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Package Installer CLI (pi)
						</h1>
						<p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
							A modern, cross-platform CLI tool to scaffold web applications with beautiful styling, 
							interactive prompts, and comprehensive framework support. Create production-ready projects in seconds.
						</p>
						<div className="flex flex-wrap justify-center gap-4 mb-8">
							<Link 
								href="/docs" 
								className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
							>
								📖 View Documentation
							</Link>
							<a
								href="https://github.com/0xshariq/package-installer-cli"
								target="_blank"
								rel="noopener"
								className="px-6 py-3 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
							>
								🐙 GitHub
							</a>
							<a
								href="https://www.npmjs.com/package/package-installer-cli"
								target="_blank"
								rel="noopener"
								className="px-6 py-3 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
							>
								📦 NPM
							</a>
						</div>
						<div className="bg-slate-800/80 p-4 rounded-lg border border-indigo-500/30 max-w-2xl mx-auto">
							<p className="text-sm text-slate-300 mb-2">Quick Start:</p>
							<code className="text-green-300 font-mono text-lg">npx package-installer-cli</code>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Features Section */}
			<AnimatedSection>
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
					<h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((f) => (
							<FeatureCard key={f.title} {...f} />
						))}
					</div>
				</div>
			</AnimatedSection>

			{/* Getting Started Section */}
			<AnimatedSection>
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
					<h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Left Column - Steps */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-indigo-300">Quick Setup Guide</h3>
							<UsageSteps />
						</div>
						
						{/* Right Column - Code Examples */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-indigo-300">Command Examples</h3>
							<div className="space-y-6">
								<div className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30">
									<h4 className="font-semibold text-indigo-300 mb-3">Basic Usage</h4>
									<pre className="bg-slate-900/50 p-4 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
										<code>pi</code>
									</pre>
								</div>
								
								<div className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30">
									<h4 className="font-semibold text-indigo-300 mb-3">Create Project with Name</h4>
									<pre className="bg-slate-900/50 p-4 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
										<code>pi my-next-app</code>
									</pre>
								</div>
								
								<div className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30">
									<h4 className="font-semibold text-indigo-300 mb-3">Use Current Directory</h4>
									<pre className="bg-slate-900/50 p-4 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
										<code>pi .</code>
									</pre>
								</div>
								
								<div className="bg-slate-800/80 p-6 rounded-xl border border-indigo-500/30">
									<h4 className="font-semibold text-indigo-300 mb-3">Full Command Name</h4>
									<pre className="bg-slate-900/50 p-4 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
										<code>package-installer my-react-app</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
					
					<div className="text-center mt-12">
						<Link 
							href="/docs" 
							className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
						>
							📚 Read Full Documentation
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
