"use client";
import { motion } from "framer-motion";

import { meta } from "@/data/content";

interface Props {
  name: string;
  tagline: string;
}

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 2.2 + i * 0.05,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function HeroText({ name, tagline }: Props) {
  const nameParts = name.split(" ");

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-6"
      aria-label={`${name} — ${tagline}`}
    >
      {/* Pre-title line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        className="w-16 h-px bg-gold mb-6 origin-left"
      />

      {/* Name — staggered letter reveal */}
      <motion.h1
        className="heading-xl text-offwhite mb-4 perspective-1000"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={name}
      >
        {nameParts.map((word, wi) => (
          <span key={wi} className="inline-block mr-4 last:mr-0 overflow-hidden" style={{ perspective: "600px" }}>
            {word.split("").map((char, ci) => {
              const globalIndex = nameParts.slice(0, wi).join("").length + ci + wi;
              return (
                <motion.span
                  key={ci}
                  custom={globalIndex}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ transformOrigin: "top center" }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>

      {/* Gold divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        className="w-24 h-px bg-gold mb-4 origin-center"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.4, duration: 0.7 }}
        className="font-inter text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-gold/80 mb-12"
      >
        {tagline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.7, duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
      >
        <a
          href={meta.cvPath}
          download="Darshika_Vijaykumar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="cta-download-cv"
          className="btn-primary flex items-center justify-center gap-2"
          aria-label="Download CV"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
        <a
          href="#projects"
          id="cta-view-work"
          className="btn-ghost"
          aria-label="View work section"
        >
          View Work
        </a>
        <a
          href="#contact"
          id="cta-get-in-touch"
          className="btn-ghost"
          aria-label="Go to contact section"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs tracking-[0.2em] uppercase text-offwhite/30">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gold/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </div>
  );
}
