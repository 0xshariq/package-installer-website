
import { FadeIn } from "../animation/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
	<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8">
	  {steps.map((step, idx) => (
		<FadeIn key={step.title} delay={idx * 0.15}>
		  <Card className="bg-slate-800/80 border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-700/30">
			<CardHeader>
			  <div className="flex items-center gap-2 sm:gap-3 mb-2">
				<span className="text-2xl sm:text-3xl animate-bounce" aria-label={step.title}>{step.icon}</span>
				<Badge variant="secondary" className="bg-indigo-500 text-white text-xs px-2 py-1 font-bold">{idx + 1}</Badge>
			  </div>
			  <CardTitle className="text-base sm:text-lg text-indigo-300">{step.title}</CardTitle>
			</CardHeader>
			<CardContent>
			  <p className="text-slate-300 mb-3 leading-relaxed text-sm sm:text-base">{step.description}</p>
			  {step.code && (
				<pre className="bg-slate-900/50 p-2 sm:p-3 rounded-lg text-green-300 text-xs sm:text-sm font-mono border border-indigo-500/20">
				  <code>{step.code}</code>
				</pre>
			  )}
			</CardContent>
		  </Card>
		</FadeIn>
	  ))}
	</div>
  );
}

export default UsageSteps;
