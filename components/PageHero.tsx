"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  mobileImage?: string;
  size?: "default" | "small";
  children?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, text, image, mobileImage, size = "default", children, className = "" }: PageHeroProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} className={`page-hero ${size === "small" ? "small" : ""} ${className}`.trim()}>
      <motion.div className="page-hero-media" style={{ y: bgY }} aria-hidden="true">
        <Image src={image} alt="" fill priority className={`page-hero-bg ${mobileImage ? "page-hero-bg-desktop" : ""}`} sizes="100vw" />
        {mobileImage && <Image src={mobileImage} alt="" fill priority className="page-hero-bg page-hero-bg-mobile" sizes="100vw" />}
      </motion.div>
      <div className="page-hero-overlay" />
      <div className="container">
        <motion.div className="page-hero-copy" style={{ y: copyY }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
