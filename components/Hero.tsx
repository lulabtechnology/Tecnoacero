"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { ArrowRight, Download, ShieldCheck, Truck, Ruler, MessageCircle } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

const heroBadges = [
  { icon: ShieldCheck, title: "Calidad garantizada", text: "Materiales con documentación técnica" },
  { icon: Ruler, title: "Corte a medida", text: "Fracciones y piezas según requerimiento" },
  { icon: Truck, title: "Entrega rápida", text: "Ciudad, Panamá Oeste e interior" },
];

export function Hero() {
  return (
    <section className="hero-section">
      <Image src="/images/hero/hero-industrial-welding.webp" alt="Soluciones industriales en acero y metalmecánica" fill priority className="hero-bg hero-bg-desktop" />
      <Image src="/images/hero/hero-industrial-welding-mobile.webp" alt="Soluciones industriales en acero y metalmecánica" fill priority className="hero-bg hero-bg-mobile" />
      <div className="hero-overlay" />
      <div className="hero-sparks" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => <span key={i} style={{ "--i": i } as CSSProperties} />)}
      </div>
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
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
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, x: 40, rotateY: -7 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
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
