"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site, whatsappHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-shell">
        <Link href="/" className="brand-link" aria-label="Tecno Acero Panamá">
          <Image src="/brand/logo-tecno-acero-real-clean.png" alt="Tecno Acero Panamá" width={165} height={67} priority className="brand-logo-img" />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}>
            <PhoneCall size={17} />
            <span>{site.phones[0]}</span>
          </a>
          <a className="btn btn-primary nav-quote" href={whatsappHref("Hola, vengo de la web y deseo cotizar materiales industriales con Tecno Acero Panamá.")} target="_blank" rel="noreferrer">
            Cotizar ahora
          </a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mobile-panel-inner">
              {navItems.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                  <Link href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
                </motion.div>
              ))}
              <a className="btn btn-primary full" href={whatsappHref()} target="_blank" rel="noreferrer">Solicitar cotización</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
