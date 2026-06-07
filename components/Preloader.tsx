"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.div
            className="preloader-card"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="preloader-mark"
              animate={{ rotate: [0, 0, 2, -2, 0], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <Image src="/brand/logo-mark.svg" alt="Tecno Acero Panamá" width={82} height={82} priority />
            </motion.div>
            <div>
              <strong>TECNO ACERO PANAMÁ</strong>
              <span>Materiales industriales · Corte · Asesoría</span>
            </div>
          </motion.div>
          <div className="preloader-line"><span /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
