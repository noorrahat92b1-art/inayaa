"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import WelcomeScreen from "@/components/WelcomeScreen";
import HeartExplosion from "@/components/HeartExplosion";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingMessage from "@/components/FloatingMessage";
import FloatingHearts from "@/components/FloatingHearts";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import Questions from "@/components/Questions";
import Timeline from "@/components/Timeline";
import Reasons from "@/components/Reasons";
import FinalSurprise from "@/components/FinalSurprise";
import content from "@/data/content.json";

type Stage = "loading" | "welcome" | "transition" | "story";

export default function Home() {
  const [stage, setStage] = useState<Stage>("loading");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setStage("welcome"), 2200);
    return () => clearTimeout(t);
  }, []);

  const startMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.5;
    el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      startMusic();
    }
  };

  const handleOpenHeart = () => {
    setStage("transition");
    startMusic();
    setTimeout(() => setStage("story"), 1500);
  };

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
    setStage("welcome");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-[100dvh] w-full bg-romantic-radial bg-ivory">
      <MusicPlayer ref={audioRef} playing={playing} onToggle={toggleMusic} />
      <FloatingMessage active={stage === "story"} />

      <AnimatePresence mode="wait">
        {stage === "loading" && <Loader key="loader" />}

        {stage === "welcome" && (
          <motion.div key={`welcome-${replayKey}`} exit={{ opacity: 0 }}>
            <WelcomeScreen onOpen={handleOpenHeart} />
          </motion.div>
        )}

        {stage === "transition" && <HeartExplosion key="explosion" />}

        {stage === "story" && (
          <motion.div
            key={`story-${replayKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="pointer-events-none fixed inset-0 -z-10">
              <FloatingHearts count={10} variant="sparkles" />
            </div>

            <header className="relative flex flex-col items-center justify-center py-16 text-center">
              <motion.p
                className="font-script text-2xl text-lavender-500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                a story written for
              </motion.p>
              <motion.h1
                className="mt-1 font-script text-5xl text-blush-600 text-glow sm:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {content.her_name} ❤️
              </motion.h1>
            </header>

            <Gallery />
            <LoveLetter />
            <Questions />
            <Timeline />
            <Reasons />
            <FinalSurprise onReplay={handleReplay} />

            <footer className="pb-14 pt-6 text-center font-script text-lg text-blush-400">
              made with ❤️ for {content.her_name}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
