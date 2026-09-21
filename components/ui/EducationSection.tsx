"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/content";

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-32 md:py-40 bg-navy-deep relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            02 — Education
          </p>
          <h2 className="heading-lg text-offwhite">Academic Journey</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-12">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gold/30 origin-top"
          />

          <div className="flex flex-col gap-0">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 md:pl-16 pb-16 last:pb-0 group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-0 top-1 w-3 h-3 -translate-x-[5px] rounded-full bg-gold border-2 border-navy-deep"
                />

                {/* Year badge */}
                <span className="inline-block font-inter text-xs tracking-[0.2em] uppercase text-gold/60 mb-2">
                  {item.period}
                </span>

                <h3 className="heading-md text-offwhite group-hover:text-gold transition-colors duration-300">
                  {item.institution}
                </h3>
                {item.degree && (
                  <p className="font-inter text-offwhite/50 text-base mt-1 mb-3 italic">
                    {item.degree}
                  </p>
                )}
                <p className="font-inter text-offwhite/60 text-sm leading-relaxed bg-navy-light/30 border border-gold/10 px-4 py-3 mt-3 max-w-lg">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
