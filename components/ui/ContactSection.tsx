"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { meta } from "@/data/content";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 md:py-40 bg-navy relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-4">
            08 — Contact
          </p>
          <h2 className="heading-lg text-offwhite">Get in Touch</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40 shadow-md shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={meta.profileImage}
                  alt={meta.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-offwhite font-semibold">{meta.name}</h3>
                <p className="font-inter text-xs text-gold/80 tracking-wider uppercase">{meta.tagline}</p>
              </div>
            </div>

            <p className="body-text text-offwhite/60 leading-relaxed max-w-sm">
              Open to professional opportunities, collaborations, and academic discussions.
            </p>

            {[
              {
                label: "Email",
                value: meta.email,
                href: `mailto:${meta.email}`,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: meta.phone,
                href: `tel:${meta.phone.replace(/\D/g, "")}`,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                  </svg>
                ),
              },
              {
                label: "Location",
                value: meta.location,
                href: "#",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-start gap-4 group"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <div className="mt-1 text-gold/60 group-hover:text-gold transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-inter text-xs text-offwhite/30 tracking-widest uppercase mb-1">
                    {contact.label}
                  </p>
                  <p className="font-inter text-offwhite/80 group-hover:text-offwhite transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Download CV */}
            <a
              href={meta.cvPath}
              download="Darshika_Vijaykumar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="download-cv"
              className="inline-flex items-center gap-3 btn-primary w-fit mt-4"
              aria-label="Download Darshika Vijaykumar's CV"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* Right: contact form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
            aria-label="Contact form"
            noValidate
          >
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label
                  htmlFor={`contact-${field.name}`}
                  className="font-inter text-xs tracking-[0.2em] uppercase text-offwhite/40"
                >
                  {field.label}
                </label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.name as keyof typeof formState]}
                  onChange={handleChange}
                  className="bg-transparent border border-gold/20 px-4 py-3 font-inter text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-inter text-xs tracking-[0.2em] uppercase text-offwhite/40"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formState.message}
                onChange={handleChange}
                className="bg-transparent border border-gold/20 px-4 py-3 font-inter text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              id="contact-submit"
              className="btn-primary w-fit"
              aria-label="Send message"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
