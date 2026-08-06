"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/data/content.json";

export default function FloatingMessage({ active }: { active: boolean }) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    let timeout: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay = 20000 + Math.random() * 10000;
      timeout = setTimeout(() => {
        const pool = content.floating_messages;
        const msg = pool[Math.floor(Math.random() * pool.length)];
        setMessage(msg);
        setTimeout(() => setMessage(null), 5200);
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-40 flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-deep max-w-xs rounded-2xl px-5 py-3 text-center font-script text-lg text-blush-600 shadow-glow-soft"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
