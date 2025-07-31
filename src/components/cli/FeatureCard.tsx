import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HoverScale } from "../animation/HoverScale";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: any;
  gradient?: string;
}

function FeatureCard({
  title,
  description,
  icon,
  gradient = "from-indigo-500 to-purple-500",
}: FeatureCardProps) {
  return (
    <HoverScale>
      <Card className="w-full h-full bg-slate-800/80 border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
        <CardHeader>
          {icon && (
            <div className="mb-3 p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 w-fit">
              {icon}
            </div>
          )}
          <CardTitle className="text-indigo-300">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </HoverScale>
  );
}

export default FeatureCard;
