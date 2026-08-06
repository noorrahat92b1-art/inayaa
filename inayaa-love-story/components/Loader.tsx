"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-romantic-radial bg-ivory"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-7xl text-blush-500"
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 26px rgba(247,109,149,0.65))" }}
        >
          ❤
        </motion.span>
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ boxShadow: ["0 0 20px rgba(247,109,149,0.3)", "0 0 60px rgba(247,109,149,0.55)", "0 0 20px rgba(247,109,149,0.3)"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.p
        className="mt-6 font-script text-2xl text-blush-600"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        loading a little bit of love...
      </motion.p>
    </motion.div>
  );
}
