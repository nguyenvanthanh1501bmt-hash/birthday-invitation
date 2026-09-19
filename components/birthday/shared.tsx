"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 34,
        scale: 0.975,
        filter: "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{
        duration: 0.78,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: progress }}
      className="fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left bg-[#efc8b8]"
    />
  );
}

export function LineArtStar() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <path d="M60 8c3 26 8 42 22 52-14 10-19 26-22 52-3-26-8-42-22-52C52 50 57 34 60 8Z" />
      <circle cx="60" cy="60" r="8" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
    >
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function SoundIcon({ active }: { active: boolean }) {
  return (
    <div className="flex h-5 items-end gap-[3px]">
      {[8, 13, 18, 11].map((height, index) => (
        <span
          key={index}
          className={active ? "animate-pulse" : ""}
          style={{
            width: 2,
            height,
            borderRadius: 999,
            background: "currentColor",
            animationDelay: `${index * 100}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function FlowerMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`flower-spin relative shrink-0 ${
        small ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      <span className="absolute left-1/2 top-0 h-1/2 w-[26%] -translate-x-1/2 rounded-full bg-[#efc7b9]" />
      <span className="absolute bottom-0 left-1/2 h-1/2 w-[26%] -translate-x-1/2 rounded-full bg-[#e7d6aa]" />
      <span className="absolute left-0 top-1/2 h-[26%] w-1/2 -translate-y-1/2 rounded-full bg-[#c7d8c4]" />
      <span className="absolute right-0 top-1/2 h-[26%] w-1/2 -translate-y-1/2 rounded-full bg-[#d8cce2]" />
      <span className="absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fffdf8]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            ANIMATED ILLUSTRATION                            */
/* -------------------------------------------------------------------------- */
