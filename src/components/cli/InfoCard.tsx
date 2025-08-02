import { ReactNode } from "react";
import { FadeIn } from "../animation/FadeIn";

interface InfoCardProps {
  type?: "info" | "warning" | "success";
  title?: string;
  children: ReactNode;
}

export function InfoCard({ type = "info", title, children }: InfoCardProps) {
  const getStyles = () => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/30",
          text: "text-amber-300",
          icon: "⚠️",
          iconAnim: "animate-shake",
        };
      case "success":
        return {
          bg: "bg-green-500/10",
          border: "border-green-500/30",
          text: "text-green-300",
          icon: "✅",
          iconAnim: "animate-pulse",
        };
      default:
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          text: "text-blue-300",
          icon: "ℹ️",
          iconAnim: "animate-pulse",
        };
    }
  };
  const styles = getStyles();
  return (
    <FadeIn>
      <div className={`rounded-xl p-4 border ${styles.bg} ${styles.border} flex items-start gap-4 shadow-md`}>
        <span className={`text-2xl ${styles.text} ${styles.iconAnim}`}>{styles.icon}</span>
        <div>
          {title && <h4 className={`font-semibold mb-2 ${styles.text}`}>{title}</h4>}
          <div className="text-slate-300">{children}</div>
        </div>
      </div>
    </FadeIn>
  );
}