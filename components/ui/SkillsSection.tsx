"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/content";
import dynamic from "next/dynamic";

const SkillsCanvas = dynamic(() => import("@/components/three/SkillsCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="w-8 h-8 border border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  ),
});

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 md:py-40 bg-navy relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16"
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            04 — Competencies
          </p>
          <h2 className="heading-lg text-offwhite">Key Skills</h2>
          <div className="section-divider" />
          <p className="body-text text-offwhite/50 max-w-xl mt-4">
            Hover over each card to explore core competencies developed through academic
            and collaborative experiences.
          </p>
        </motion.div>

        {/* 3D Canvas for skills cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[500px] md:h-[600px]"
        >
          <SkillsCanvas skills={skills} />
        </motion.div>

        {/* Fallback grid (reduced motion / no-JS) */}
        <noscript>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {skills.map((s) => (
              <div
                key={s.id}
                className="border border-gold/20 p-6 bg-navy-light/20 text-center"
              >
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <p className="font-inter text-offwhite/80 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
