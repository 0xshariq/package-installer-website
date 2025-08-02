"use client"
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative group animate-fade-in">
      {title && (
        <div className="text-sm text-indigo-300 mb-2 font-medium">{title}</div>
      )}
      <div className="relative bg-slate-900/80 rounded-lg border border-indigo-500/30 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-indigo-500/20">
          <span className="text-xs text-indigo-400 font-mono">{language}</span>
          <button
            onClick={copyToClipboard}
            className={`text-xs text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 px-2 py-1 rounded ${copied ? 'animate-pulse bg-indigo-700/30 text-green-300' : ''}`}
            aria-label={copied ? "Code copied" : "Copy code"}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-green-300 font-mono text-sm">{code}</code>
        </pre>
      </div>
    </div>
  );
}