"use client";
import { motion } from "framer-motion";
import React from "react";

export function SlideUp({ children, delay = 0, duration = 0.7, y = 40 }: { children: React.ReactNode; delay?: number; duration?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
