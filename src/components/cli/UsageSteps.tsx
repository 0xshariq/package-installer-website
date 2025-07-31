import { StaggeredFadeIn } from "../animation/StaggeredFadeIn";

const steps = [
	{
		title: "Install CLI",
		description: "Run 'npx package-installer-cli' in your terminal to get started.",
		code: "npx package-installer-cli",
		icon: "📦",
	},
	{
		title: "Choose Packages",
		description: "Select and install npm packages interactively from a curated list.",
		icon: "🎯",
	},
	{
		title: "Configure Project",
		description: "Set up your project with the selected dependencies automatically.",
		icon: "⚙️",
	},
	{
		title: "Enjoy!",
		description: "Your project is ready with all dependencies installed and configured.",
		icon: "🚀",
	},
];

function UsageSteps() {
	const stepElements = steps.map((step, idx) => (
		<div
			key={step.title}
			className="bg-slate-800/80 p-6 rounded-xl shadow-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300"
		>
					<div className="flex items-center gap-3 mb-3">
						<span className="text-2xl">{step.icon}</span>
						<div className="flex items-center gap-2">
							<span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-bold">
								{idx + 1}
							</span>
							<h3 className="font-bold text-lg text-indigo-300">{step.title}</h3>
						</div>
					</div>
					<p className="text-slate-300 mb-3 leading-relaxed">{step.description}</p>
					{step.code && (
						<pre className="bg-slate-900/50 p-3 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
							<code>{step.code}</code>
						</pre>
					)}
				</div>
			));

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
			<StaggeredFadeIn staggerDelay={100}>
				{stepElements}
			</StaggeredFadeIn>
		</div>
	);
}

export default UsageSteps;
