"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { ArrowRight, Download, ShieldCheck, Truck, Ruler, MessageCircle, Layers3, Boxes, ScanSearch } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

const heroBadges = [
  { icon: ShieldCheck, title: "Calidad garantizada", text: "Materiales con documentación técnica" },
  { icon: Ruler, title: "Corte a medida", text: "Fracciones y piezas según requerimiento" },
  { icon: Truck, title: "Entrega rápida", text: "Ciudad, Panamá Oeste e interior" },
];

const heroSignals = [
  { icon: Boxes, label: "Líneas técnicas", value: "Materiales industriales" },
  { icon: ScanSearch, label: "Atención comercial", value: "Cotización ágil y asesoría" },
  { icon: Layers3, label: "Solución integral", value: "Inventario, corte y entrega" },
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const panelY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section className="hero-section" ref={ref}>
      <motion.div className="hero-parallax-media" style={{ y: bgY }} aria-hidden="true">
        <Image src="/images/hero/hero-industrial-welding-wow.webp" alt="Soluciones industriales en acero y metalmecánica" fill priority className="hero-bg hero-bg-desktop" />
        <Image src="/images/hero/hero-industrial-welding-wow-mobile.webp" alt="Soluciones industriales en acero y metalmecánica" fill priority className="hero-bg hero-bg-mobile" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-sparks" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => <span key={i} style={{ "--i": i } as CSSProperties} />)}
      </div>
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          style={{ y: copyY }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker">Tecno Acero Panamá, S.A.</span>
          <h1>Fortalecemos la industria con acero de calidad.</h1>
          <p>
            Materiales ferrosos y no ferrosos, corte CNC plasma, corte a la medida, asesoría técnica y entregas para empresas metalmecánicas, constructoras, marítimas e industriales.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappHref("Hola, vengo de la web de Tecno Acero Panamá. Deseo solicitar una cotización de materiales industriales.")} target="_blank" rel="noreferrer">
              Cotizar ahora <ArrowRight size={18} />
            </a>
            <Link className="btn btn-outline" href="/productos">Ver materiales</Link>
            <a className="btn btn-ghost" href="/docs/catalogo-tecno-acero.pdf" download>
              <Download size={18} /> Catálogo
            </a>
          </div>
          <div className="hero-signal-grid">
            {heroSignals.map(({ icon: Icon, label, value }) => (
              <div className="hero-signal-card" key={label}>
                <Icon size={20} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          style={{ y: panelY }}
          initial={{ opacity: 0, x: 40, rotateY: -7 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-panel-media">
            <Image src="/images/sections/inventario-materiales-wow.webp" alt="Inventario industrial de materiales" fill sizes="(max-width: 900px) 100vw, 32vw" />
          </div>
          <div className="panel-top">
            <Image src="/brand/logo-mark.svg" alt="TA" width={56} height={56} />
            <div>
              <strong>Soluciones industriales</strong>
              <span>Inventario · Corte · Entrega</span>
            </div>
          </div>
          <div className="panel-lines">
            <span /><span /><span />
          </div>
          <div className="panel-callout">
            <MessageCircle size={20} />
            <p>Envíanos planos, medidas, fotos o especificaciones para preparar tu cotización.</p>
          </div>
          <a href={`mailto:${site.email}`} className="panel-email">{site.email}</a>
        </motion.div>
      </div>

      <div className="container hero-badges">
        {heroBadges.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              className="hero-badge"
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08, duration: 0.6 }}
            >
              <Icon size={25} />
              <div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
