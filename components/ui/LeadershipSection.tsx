"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { leadership } from "@/data/content";

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-32 md:py-40 bg-navy relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            06 — Leadership
          </p>
          <h2 className="heading-lg text-offwhite">Extracurricular</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-gold/15 bg-navy-light/10 p-8 hover:border-gold/40 hover:bg-navy-light/20 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="font-inter text-gold/70 text-xs tracking-[0.2em] uppercase mb-1">
                {item.role}
              </p>
              <h3 className="font-playfair text-offwhite text-xl font-semibold group-hover:text-gold transition-colors duration-300">
                {item.org}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
