"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}       // start slightly below and transparent
        animate={{ opacity: 1, y: 0 }}        // move to natural position and fully visible
        exit={{ opacity: 0, y: -20 }}         // slide up and fade out
        transition={{ duration: 0.33, ease: "easeInOut" }}  // easing function
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
