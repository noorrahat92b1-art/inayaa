"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function HeartExplosion({ onComplete }: { onComplete?: () => void }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 300 + Math.random() * 700;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const size = 14 + Math.random() * 30;
        const delay = Math.random() * 0.25;
        const symbol = Math.random() > 0.5 ? "❤" : "💗";
        return { id: i, x, y, size, delay, symbol };
      }),
    []
  );

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-silk-gradient"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {}}
    >
      <motion.span
        className="absolute text-8xl text-blush-500"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 1.4, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.1, times: [0, 0.5, 1] }}
        style={{ filter: "drop-shadow(0 0 30px rgba(247,109,149,0.7))" }}
      >
        ❤
      </motion.span>
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-blush-400"
          style={{ fontSize: h.size }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
          animate={{ x: h.x, y: h.y, opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: 1.3, delay: h.delay, ease: "easeOut" }}
          onAnimationComplete={h.id === hearts.length - 1 ? onComplete : undefined}
        >
          {h.symbol}
        </motion.span>
      ))}
    </motion.div>
  );
}
