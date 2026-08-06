"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  playing: boolean;
  onToggle: () => void;
};

const MusicPlayer = forwardRef<HTMLAudioElement, Props>(function MusicPlayer(
  { playing, onToggle },
  ref
) {
  const [errored, setErrored] = useState(false);

  return (
    <>
      <audio
        ref={ref}
        loop
        preload="none"
        onError={() => setErrored(true)}
        src="/sounds/romantic-bg.mp3"
      />
      <motion.button
        onClick={onToggle}
        aria-label={playing ? "Mute music" : "Play music"}
        title={errored ? "Add your song at public/sounds/romantic-bg.mp3" : playing ? "Mute music" : "Play music"}
        className="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full glass shadow-glow-soft text-blush-600"
        whileTap={{ scale: 0.88 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {playing ? (
          <span className="text-lg">🎵</span>
        ) : (
          <span className="text-lg opacity-50">🔇</span>
        )}
      </motion.button>
    </>
  );
});

export default MusicPlayer;
