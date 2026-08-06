"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/data/content.json";
import SectionHeading from "./SectionHeading";
import FloatingHearts from "./FloatingHearts";

export default function FinalSurprise({ onReplay }: { onReplay: () => void }) {
  const [opened, setOpened] = useState(false);
  const { lines, image, replay_button } = content.final_surprise;

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-8" id="surprise">
      <div className="absolute inset-0 bg-silk-gradient opacity-60" />
      {opened && <FloatingHearts count={70} />}

      <div className="relative">
        <SectionHeading eyebrow="One last thing" title="A Little Surprise, Just For You" />

        <div className="relative mx-auto flex min-h-[380px] max-w-sm flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.button
                key="box"
                onClick={() => setOpened(true)}
                className="relative flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.4 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, -3, 3, -3, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="flex h-40 w-40 flex-col items-center">
                    <div className="h-8 w-44 -mb-1 rounded-md bg-blush-400 shadow-glow" />
                    <div className="relative h-32 w-40 rounded-b-lg bg-gradient-to-br from-lavender-300 to-blush-300 shadow-glow">
                      <div className="absolute inset-x-0 top-0 h-full w-3 -translate-x-1/2 bg-white/70 left-1/2" />
                      <div className="absolute inset-y-0 left-0 h-3 w-full -translate-y-1/2 bg-white/70 top-1/2" />
                    </div>
                  </div>
                </motion.div>
                <p className="font-script text-2xl text-blush-600">tap to open</p>
              </motion.button>
            ) : (
              <motion.div
                key="reveal"
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-glow"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, type: "spring" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={content.her_name} className="h-full w-full object-cover" />
                </motion.div>

                <div className="mt-6 space-y-2">
                  {lines.map((line, i) => (
                    <motion.p
                      key={i}
                      className="font-script text-2xl text-blush-600"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.4, duration: 0.6 }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <motion.button
                  onClick={onReplay}
                  className="mt-10 rounded-full glass-deep px-7 py-3.5 font-display text-base italic text-blush-600 shadow-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + lines.length * 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                >
                  ❤️ {replay_button} ❤️
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
