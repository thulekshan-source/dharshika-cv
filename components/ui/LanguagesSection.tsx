"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { languages } from "@/data/content";

export default function LanguagesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="languages"
      className="py-32 md:py-40 bg-navy-deep relative overflow-hidden"
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            07 — Languages
          </p>
          <h2 className="heading-lg text-offwhite">Communication</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-2xl flex flex-col gap-10">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-between items-end mb-3">
                <h3 className="font-playfair text-offwhite text-2xl font-semibold">
                  {lang.name}
                </h3>
                <span className="font-inter text-gold/60 text-sm tracking-widest">
                  {lang.proficiency}%
                </span>
              </div>

              {/* Track */}
              <div
                className="w-full h-px bg-offwhite/10 relative"
                role="progressbar"
                aria-valuenow={lang.proficiency}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${lang.name} proficiency ${lang.proficiency}%`}
              >
                {/* Fill */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 h-full bg-gold origin-left"
                  style={{ width: `${lang.proficiency}%` }}
                />
                {/* Gold dot at end */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 + i * 0.2 }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold"
                  style={{ left: `${lang.proficiency}%`, transform: "translate(-50%, -50%)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
