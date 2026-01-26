"use client";

import { AnimatePresence } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      {children}
    </AnimatePresence>
  );
}
