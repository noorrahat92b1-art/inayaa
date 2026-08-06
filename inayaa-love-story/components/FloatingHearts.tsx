"use client";

import { useMemo } from "react";

type Props = {
  count?: number;
  className?: string;
  variant?: "hearts" | "sparkles" | "mixed";
};

const SYMBOLS_HEARTS = ["❤", "💗", "💕", "♡"];
const SYMBOLS_SPARKLES = ["✨", "·", "✦"];

export default function FloatingHearts({ count = 16, className = "", variant = "mixed" }: Props) {
  const items = useMemo(() => {
    const pool =
      variant === "hearts" ? SYMBOLS_HEARTS : variant === "sparkles" ? SYMBOLS_SPARKLES : [...SYMBOLS_HEARTS, ...SYMBOLS_SPARKLES];
    return Array.from({ length: count }).map((_, i) => {
      const symbol = pool[Math.floor(Math.random() * pool.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 12;
      const duration = 10 + Math.random() * 10;
      const size = 12 + Math.random() * 22;
      const opacity = 0.35 + Math.random() * 0.5;
      return { id: i, symbol, left, delay, duration, size, opacity };
    });
  }, [count, variant]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute bottom-0 select-none text-blush-400"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            animation: `floatUp ${item.duration}s linear ${item.delay}s infinite`
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
