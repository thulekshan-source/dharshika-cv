"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { meta, about } from "@/data/content";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 md:py-40 bg-navy relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-playfair text-white/[0.02] select-none pointer-events-none leading-none">
        DV
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Image with arched mask */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 md:w-80">
              {/* Arch frame */}
              <div className="overflow-hidden shadow-2xl group border border-gold/20" style={{ borderRadius: "50% 50% 0 0 / 60% 60% 0 0" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={meta.profileImage}
                  alt="Darshika Vijaykumar — professional portrait"
                  className="w-full h-[400px] md:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              {/* Gold corner accent */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-gold" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-gold" />
              {/* GPA badge */}
              <div className="absolute -bottom-6 right-4 bg-navy-light border border-gold/30 px-4 py-2 text-center">
                <p className="font-playfair text-gold text-xl font-bold">3.68</p>
                <p className="font-inter text-offwhite/50 text-xs tracking-widest uppercase">Cumulative GPA</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
              01 — About
            </p>
            <h2 className="heading-lg text-offwhite mb-6">{about.heading}</h2>
            <div className="section-divider" />
            <p className="body-text text-offwhite/70 mb-10 leading-[1.9]">
              {about.body}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 border-t border-gold/10 pt-8 mb-8">
              {[
                { value: "3.68", label: "GPA" },
                { value: "2nd", label: "Year" },
                { value: "5+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-gold text-3xl font-bold">{stat.value}</p>
                  <p className="font-inter text-offwhite/40 text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={meta.cvPath}
              download="Darshika_Vijaykumar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary text-xs py-3 px-6"
              aria-label="Download CV from About Section"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full Curriculum Vitae
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
