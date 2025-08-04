import { ReactNode } from "react";
import { FadeIn } from "../animation/FadeIn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

interface InfoCardProps {
  type?: "info" | "warning" | "success";
  title?: string;
  children: ReactNode;
}

export function InfoCard({ type = "info", title, children }: InfoCardProps) {
  const getIcon = () => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getVariantClasses = () => {
    switch (type) {
      case "warning":
        return "border-amber-500/30 bg-amber-500/10 text-amber-300 [&>svg]:text-amber-400";
      case "success":
        return "border-green-500/30 bg-green-500/10 text-green-300 [&>svg]:text-green-400";
      default:
        return "border-blue-500/30 bg-blue-500/10 text-blue-300 [&>svg]:text-blue-400";
    }
  };

  return (
    <FadeIn>
      <Alert className={`p-4 sm:p-6 max-w-full sm:max-w-2xl mx-auto ${getVariantClasses()}`}>
        {getIcon()}
        {title && <AlertTitle className="text-base sm:text-lg font-semibold mb-2">{title}</AlertTitle>}
        <AlertDescription className="text-sm sm:text-base leading-relaxed">
          {children}
        </AlertDescription>
      </Alert>
    </FadeIn>
  );
}