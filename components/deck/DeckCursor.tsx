"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function DeckCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for organic follow effect
  const springConfig = { damping: 35, stiffness: 300, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [label, setLabel] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor-label]");
      if (target) {
        const text = target.getAttribute("data-cursor-label") || "VIEW";
        setLabel(text);
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor-label]");
      if (target) {
        setIsHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="c-cursor-wrapper pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <motion.div
        className={`c-cursor ${isHovered ? "is-hovered" : ""}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <span className="c-cursor__inner">{label}</span>
      </motion.div>
    </div>
  );
}
