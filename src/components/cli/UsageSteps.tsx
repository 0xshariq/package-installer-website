
import { FadeIn } from "../animation/FadeIn";

const steps = [
  {
	title: "Run CLI",
	description: "Use 'pi' or 'package-installer' command to start the interactive scaffolder.",
	code: "pi",
	icon: "💻",
  },
  {
	title: "Choose Framework",
	description: "Select from 10+ frameworks: Next.js, React, Vue, Angular, Express, Rust, Remix, NestJS.",
	icon: "🚀",
  },
  {
	title: "Configure Project",
	description: "Set language (JS/TS), UI libraries (Shadcn/ui, Material-UI), and project settings.",
	icon: "⚙️",
  },
  {
	title: "Start Building",
	description: "Your production-ready project is created with all dependencies and configurations set up.",
	icon: "🎉",
  },
];

function UsageSteps() {
  return (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
	  {steps.map((step, idx) => (
		<FadeIn key={step.title} delay={idx * 0.15}>
		  <div className="bg-slate-800/80 p-6 rounded-xl shadow-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
			<div className="flex items-center gap-3 mb-3">
			  <span className="text-3xl animate-bounce" aria-label={step.title}>{step.icon}</span>
			  <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-bold">{idx + 1}</span>
			  <h3 className="font-bold text-lg text-indigo-300">{step.title}</h3>
			</div>
			<p className="text-slate-300 mb-3 leading-relaxed">{step.description}</p>
			{step.code && (
			  <pre className="bg-slate-900/50 p-3 rounded-lg text-green-300 text-sm font-mono border border-indigo-500/20">
				<code>{step.code}</code>
			  </pre>
			)}
		  </div>
		</FadeIn>
	  ))}
	</div>
  );
}

export default UsageSteps;
