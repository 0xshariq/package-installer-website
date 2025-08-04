"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";

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
        <div className="text-xs sm:text-sm text-indigo-300 mb-2 font-medium">{title}</div>
      )}
      <Card className="bg-slate-900/80 border-indigo-500/30 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-2 sm:px-4 py-2 bg-slate-800/50 border-b border-indigo-500/20">
          <Badge variant="outline" className="text-xs sm:text-sm text-indigo-400 border-indigo-500/30">{language}</Badge>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className={`text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 transition-colors ${copied ? 'text-green-300' : ''}`}
            aria-label={copied ? "Code copied" : "Copy code"}
          >
            {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          <pre className="overflow-x-auto">
            <code className="text-green-300 font-mono text-xs sm:text-sm">{code}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
       