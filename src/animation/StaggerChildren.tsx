"use client";
import { motion } from "framer-motion";
import React from "react";

export function StaggerChildren({ children, stagger = 0.15 }: { children: React.ReactNode; stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: stagger, duration: 0.7, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
