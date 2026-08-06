"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import content from "@/data/content.json";

const collage = [1, 2, 3, 4, 5, 6].map((n) => `/images/image${n}.jpg`);

export default function WelcomeScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-70 md:grid-cols-3">
        {collage.map((src, i) => (
          <div key={src} className="relative h-full w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full scale-110 object-cover"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-white/60 via-blush-50/70 to-lavender-100/70" />

      <FloatingHearts count={20} />

      <div className="relative z-10 flex max-w-xl flex-col items-center px-6 text-center">
        <motion.span
          className="mb-4 text-4xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          ✨
        </motion.span>

        <motion.h1
          className="font-script text-4xl leading-tight text-blush-600 text-glow sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {content.welcome.line1}
        </motion.h1>
        <motion.h2
          className="mt-3 font-script text-3xl text-lavender-500 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {content.welcome.line2} ❤️
        </motion.h2>

        <motion.button
          onClick={onOpen}
          className="mt-10 rounded-full glass-deep px-8 py-4 font-display text-lg italic text-blush-600 shadow-glow animate-pulseGlow"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          ✨ {content.welcome.button} ✨
        </motion.button>
      </div>
    </div>
  );
}
