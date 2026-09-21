"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/content";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 15}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  const categoryColors: Record<string, string> = {
    Marketing: "#C9A227",
    CSR: "#4a7c59",
    Research: "#3a5a8a",
    Economics: "#6a4a8a",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="h-scroll-item w-72 md:w-80 lg:w-96"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full border border-gold/15 bg-navy-light/20 overflow-hidden cursor-pointer group"
        style={{
          transition: "transform 0.15s ease-out",
          willChange: "transform",
        }}
      >
        {/* Card top accent */}
        <div
          className="h-1 w-full"
          style={{ background: categoryColors[project.category] ?? "#C9A227" }}
        />

        {/* Card image placeholder */}
        <div
          className="h-48 relative overflow-hidden"
          style={{ background: `${project.color}22` }}
        >
          {/* Parallax inner layer on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          >
            <span
              className="font-playfair text-7xl opacity-10 select-none"
              style={{ color: categoryColors[project.category] ?? "#C9A227" }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>

          {/* Category badge */}
          <span
            className="absolute top-4 left-4 font-inter text-xs tracking-widest uppercase px-3 py-1"
            style={{
              background: `${categoryColors[project.category]}33`,
              color: categoryColors[project.category] ?? "#C9A227",
              border: `1px solid ${categoryColors[project.category]}66`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Card body */}
        <div className="p-6">
          <h3 className="font-playfair text-offwhite text-lg font-semibold leading-tight mb-2 group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-inter text-offwhite/50 text-sm leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 md:py-40 bg-navy-deep relative overflow-hidden"
    >
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            05 — Academic Work
          </p>
          <h2 className="heading-lg text-offwhite">Projects</h2>
          <div className="section-divider" />
          <p className="body-text text-offwhite/50 max-w-xl mt-4">
            Scroll horizontally to browse selected academic and research projects.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        className="h-scroll-container section-container"
        role="list"
        aria-label="Academic projects"
      >
        {projects.map((project, i) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="section-container flex items-center gap-3 mt-6"
      >
        <div className="w-8 h-px bg-gold/30" />
        <span className="font-inter text-xs text-offwhite/30 tracking-widest uppercase">
          Scroll to explore
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/40">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </section>
  );
}
