"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundPaths() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Sunbeam Light Rays from heaven */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.35)_0%,_rgba(254,243,199,0.25)_40%,_transparent_75%)] blur-2xl pointer-events-none" />

      {/* Sage Mist Floating Auroras */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(168,196,178,0.25)_0%,_transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(220,232,224,0.35)_0%,_transparent_70%)] blur-3xl" />

      {/* Gentle Divine Flow Paths */}
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 850" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sunbeam-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#84a890" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="sage-soft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a8c4b2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {[
          { d: "M-50,180 C320,60 620,420 1500,160", delay: 0 },
          { d: "M-50,290 C420,130 720,490 1500,240", delay: 2 },
          { d: "M-50,440 C370,230 820,590 1500,360", delay: 4 },
        ].map((line, i) => (
          <motion.path
            key={i}
            d={line.d}
            stroke={i % 2 === 0 ? "url(#sunbeam-soft)" : "url(#sage-soft)"}
            strokeWidth={1.5}
            strokeDasharray="6 10"
            fill="none"
            initial={{ opacity: 0.2 }}
            animate={reduce ? undefined : { opacity: [0.2, 0.55, 0.2] }}
            transition={reduce ? undefined : { duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut", delay: line.delay }}
          />
        ))}

        {/* Luminous Sunbeam light diagonal bands */}
        <polygon points="650,-20 850,-20 1150,850 850,850" fill="url(#sunbeam-soft)" opacity="0.06" />
        <polygon points="420,-20 580,-20 820,850 560,850" fill="url(#sunbeam-soft)" opacity="0.05" />
      </svg>
    </div>
  );
}
