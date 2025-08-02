import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FadeIn } from "../animation/FadeIn";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
}

function FeatureCard({
  title,
  description,
  icon,
  gradient = "from-indigo-500 to-purple-500",
}: FeatureCardProps) {
  return (
    <FadeIn>
      <Card className="w-full h-full bg-slate-800/80 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-700/30">
        <CardHeader>
          {icon && (
            <div className={`mb-3 p-2 rounded-lg bg-gradient-to-r ${gradient} w-fit animate-bounce`}>{icon}</div>
          )}
          <CardTitle className="text-indigo-300 group-hover:text-indigo-400 transition-colors duration-200">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

export default FeatureCard;
