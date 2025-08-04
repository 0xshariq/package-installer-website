import { AnimatedSection } from "@/components/cli/AnimatedSection";
import FeatureCard from "@/components/cli/FeatureCard";
import UsageSteps from "@/components/cli/UsageSteps";
import Link from "next/link";
import { FadeIn } from "@/components/animation/FadeIn";
import { SlideUp } from "@/components/animation/SlideUp";
import { Button } from "@/components/ui/button";

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
	<main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white px-4 sm:px-6 md:px-8 py-8 md:py-16">
			{/* Hero Section */}
			<AnimatedSection>
				<FadeIn>
		  <section className="text-center mb-10 px-2 sm:px-0">
						<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							package-installer-cli
						</h1>
						<p className="text-lg md:text-xl mb-8 opacity-90">
							Effortlessly install npm packages with an interactive CLI tool.
						</p>
						<div className="flex flex-wrap justify-center gap-4 mb-8">
							<Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition-all duration-300">
								<Link href="/docs">
									📖 View Documentation
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg" className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10">
								<a
									href="https://github.com/0xshariq/package-installer-cli"
									target="_blank"
									rel="noopener"
								>
									🐙 GitHub
								</a>
							</Button>
							<Button asChild variant="outline" size="lg" className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10">
								<a
									href="https://www.npmjs.com/package/package-installer-cli"
									target="_blank"
									rel="noopener"
								>
									📦 NPM
								</a>
							</Button>
							<Button asChild variant="outline" size="lg" className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10">
								<a
									href="https://portfolio-sigma-rose-22.vercel.app/blog/package-installer-cli"
									target="_blank"
									rel="noopener"
								>
									📝 Blog
								</a>
							</Button>
						</div>
					</section>
				</FadeIn>
			</AnimatedSection>

			{/* Features Section */}
			<AnimatedSection>
				<SlideUp>
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Features</h2>
		  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((f) => (
							<FadeIn key={f.title}>
								<FeatureCard {...f} />
							</FadeIn>
						))}
					</div>
				</SlideUp>
			</AnimatedSection>

			{/* Getting Started Section */}
			<AnimatedSection>
				<SlideUp>
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Usage</h2>
					<UsageSteps />
				</SlideUp>
			</AnimatedSection>
		</main>
	);
}
