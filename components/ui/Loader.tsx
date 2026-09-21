"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy-deep"
          aria-label="Loading portfolio"
          role="status"
        >
          {/* Gold ring spinner */}
          <div className="relative w-16 h-16 mb-6">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 rounded-full border border-gold/20" />
          </div>

          {/* Monogram */}
          <motion.p
            className="font-playfair text-gold text-2xl tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            DV
          </motion.p>
          <motion.p
            className="font-inter text-offwhite/40 text-xs tracking-[0.2em] uppercase mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
