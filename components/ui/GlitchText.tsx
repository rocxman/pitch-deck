"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/cn";

type GlitchTextProps = {
  text: string;
  speed?: number;
  glitchChance?: number;
  glitchCycles?: number;
  glitchInterval?: number;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  onComplete?: () => void;
};

const DEFAULT_SYMBOLS = "!<>-_\\/[]{}—=+*^?#_@■▇▆▅▄▃▃▁▉▊▌▍▎▏";

export function GlitchText({
  text,
  speed = 35,
  glitchChance = 0.4,
  glitchCycles = 5,
  glitchInterval = 35,
  className,
  delay = 0,
  as = "span",
  onComplete,
}: GlitchTextProps) {
  const Component = as;
  const chars = text.split("");
  const [displayChars, setDisplayChars] = useState<string[]>(chars);
  const [visibleIndices, setVisibleIndices] = useState<boolean[]>(
    new Array(text.length).fill(false)
  );
  const [isTyping, setIsTyping] = useState(false);
  const [caretIndex, setCaretIndex] = useState(-1);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let active = true;
    let typingTimeoutId: NodeJS.Timeout;
    const glitchIntervalIds: NodeJS.Timeout[] = [];

    // Reset state when text changes
    setDisplayChars(text.split(""));
    setVisibleIndices(new Array(text.length).fill(false));
    setIsTyping(false);
    setCaretIndex(-1);

    const startTyping = () => {
      if (!active) return;
      setIsTyping(true);
      let currentIndex = 0;

      const typeNextChar = () => {
        if (!active) return;

        if (currentIndex < chars.length) {
          const charIndex = currentIndex;

          setVisibleIndices((prev) => {
            const next = [...prev];
            next[charIndex] = true;
            return next;
          });
          setCaretIndex(charIndex);

          const char = chars[charIndex];

          if (char !== " " && Math.random() < glitchChance) {
            const originalChar = char;
            let currentCycle = 0;
            const maxCycles = Math.floor(Math.random() * glitchCycles) + 2;

            const glitchTimer = setInterval(() => {
              if (!active) {
                clearInterval(glitchTimer);
                return;
              }

              if (currentCycle < maxCycles) {
                const randomSymbol =
                  DEFAULT_SYMBOLS[
                    Math.floor(Math.random() * DEFAULT_SYMBOLS.length)
                  ];
                setDisplayChars((prev) => {
                  const next = [...prev];
                  next[charIndex] = randomSymbol;
                  return next;
                });
                currentCycle++;
              } else {
                clearInterval(glitchTimer);
                setDisplayChars((prev) => {
                  const next = [...prev];
                  next[charIndex] = originalChar;
                  return next;
                });
              }
            }, glitchInterval);

            glitchIntervalIds.push(glitchTimer);
          }

          currentIndex++;
          typingTimeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setCaretIndex(-1);
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }
      };

      typeNextChar();
    };

    const delayTimeoutId = setTimeout(startTyping, delay);

    return () => {
      active = false;
      clearTimeout(delayTimeoutId);
      clearTimeout(typingTimeoutId);
      glitchIntervalIds.forEach(clearInterval);
    };
  }, [text, speed, glitchChance, glitchCycles, glitchInterval, delay]);

  return (
    <Component className={cn("relative leading-normal block select-none", className)}>
      {/* Screen reader only text */}
      <span className="sr-only">{text}</span>

      {/* Hidden text placeholder to preserve layout sizing exactly */}
      <span
        className="invisible select-none pointer-events-none"
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Visible typing layer mimicking CodePen DOM wrapper */}
      <span
        className="absolute inset-0 select-none text-inherit pointer-events-none"
        aria-hidden="true"
      >
        {isTyping && caretIndex === -1 && (
          <span className="typing-caret"></span>
        )}
        {chars.map((char, index) => {
          const isVisible = visibleIndices[index];
          const displayChar = displayChars[index];

          return (
            <React.Fragment key={index}>
              <span className={cn("type-char", isVisible ? "visible" : "")}>
                {displayChar}
              </span>
              {isTyping && caretIndex === index && (
                <span className="typing-caret"></span>
              )}
            </React.Fragment>
          );
        })}
      </span>
    </Component>
  );
}
