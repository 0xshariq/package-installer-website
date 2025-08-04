import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FadeIn } from "../animation/FadeIn";
import { Badge } from "@/components/ui/badge";

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
      <Card className="w-full h-full bg-slate-800/80 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-700/30 p-4 sm:p-6 max-w-full sm:max-w-md mx-auto">
        <CardHeader>
          {icon && (
            <Badge className={`mb-3 p-2 rounded-lg bg-gradient-to-r ${gradient} w-fit animate-bounce text-white text-lg`}>
              {icon}
            </Badge>
          )}
          <CardTitle className="text-indigo-300 group-hover:text-indigo-400 transition-colors duration-200 text-base sm:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{description}</p>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

export default FeatureCard;
