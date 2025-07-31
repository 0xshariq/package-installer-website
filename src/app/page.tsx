import FeatureCard from "@/components/cli/FeatureCard";
import UsageSteps from "@/components/cli/UsageSteps";
import { AnimatedSection } from "@/components/cli/AnimatedSection";
import Link from "next/link";

const features = [
	{
		title: "Interactive CLI",
		description: "Install npm packages with a beautiful, interactive command-line interface.",
		icon: "💻",
	},
	{
		title: "Fast & Reliable",
		description: "Quickly add dependencies to your project with zero configuration required.",
		icon: "⚡",
	},
	{
		title: "Smart Suggestions",
		description: "Get intelligent package recommendations based on your project type and existing dependencies.",
		icon: "🎯",
	},
	{
		title: "Cross-Platform",
		description: "Works seamlessly on Windows, macOS, and Linux with consistent behavior.",
		icon: "🌐",
	},
	{
		title: "TypeScript Ready",
		description: "Full TypeScript support with type definitions and IntelliSense integration.",
		icon: "🔷",
	},
	{
		title: "Open Source",
		description: "MIT licensed and available on GitHub for community contributions and transparency.",
		icon: "📖",
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white px-4 py-12">
			<AnimatedSection>
				<div className="text-center mb-10">
					<h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						package-installer-cli
					</h1>
					<p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
						Effortlessly install and manage npm packages with an intelligent, interactive CLI tool. 
						Get started in seconds with zero configuration required.
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
			</AnimatedSection>
			<AnimatedSection>
				<h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((f) => (
						<FeatureCard key={f.title} {...f} />
					))}
				</div>
			</AnimatedSection>
			<AnimatedSection>
				<h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
				<UsageSteps />
				<div className="text-center mt-8">
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
			</AnimatedSection>
		</main>
	);
}
