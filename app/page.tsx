"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LandingPage } from "@/components/deck/LandingPage";
import { PitchDeck } from "@/components/deck/PitchDeck";
import { slides } from "@/data/slides";

export default function Home() {
  const [showDeck, setShowDeck] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showDeck ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <LandingPage onEnter={() => setShowDeck(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="deck"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <PitchDeck slides={slides} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
