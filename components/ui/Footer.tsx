"use client";
import { meta } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/10 py-10 bg-navy-deep">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-playfair text-gold text-xl tracking-widest">DV</p>
        <p className="font-inter text-offwhite/30 text-xs tracking-widest text-center">
          © {year} Darshika Vijaykumar. All rights reserved.
        </p>
        <a
          href={`mailto:${meta.email}`}
          className="font-inter text-offwhite/40 text-xs hover:text-gold transition-colors tracking-widest"
          aria-label="Send email to Darshika Vijaykumar"
        >
          {meta.email}
        </a>
      </div>
    </footer>
  );
}
