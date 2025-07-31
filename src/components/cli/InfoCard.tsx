import { motion } from "framer-motion";
import { ReactNode } from "react";

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
        };
      case "success":
        return {
          bg: "bg-green-500/10",
          border: "border-green-500/30",
          text: "text-green-300",
          icon: "✅",
        };
      default:
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          text: "text-blue-300",
          icon: "ℹ️",
        };
    }
  };

  const styles = getStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${styles.bg} ${styles.border}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg">{styles.icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${styles.text}`}>{title}</h4>
          )}
          <div className="text-slate-300">{children}</div>
        </div>
      </div>
    </motion.div>
  );
} 