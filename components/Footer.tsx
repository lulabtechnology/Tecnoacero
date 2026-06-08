import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall, Clock, Instagram } from "lucide-react";
import { navItems, site, whatsappHref } from "@/lib/site";
import { categories } from "@/lib/materials";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/brand/logo-tecno-acero-clean.png" alt="Tecno Acero Panamá" width={250} height={72} />
          <p>Soluciones industriales confiables en materiales ferrosos y no ferrosos, corte, asesoría técnica y entrega para el sector metalmecánico panameño.</p>
          <div className="footer-social">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Tecno Acero Panamá"><Instagram size={18} /> {site.instagramLabel}</a>
          </div>
        </div>

        <div className="footer-block">
          <h3>Navegación</h3>
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="footer-block">
          <h3>Líneas principales</h3>
          {categories.slice(0, 6).map((category) => <Link key={category} href={`/productos?categoria=${encodeURIComponent(category)}`}>{category}</Link>)}
        </div>

        <div className="footer-block contact-list">
          <h3>Contacto</h3>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer"><MapPin size={17} /> {site.address}</a>
          <a href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}><PhoneCall size={17} /> {site.phones.join(" / ")}</a>
          <a href={`mailto:${site.email}`}><Mail size={17} /> {site.email}</a>
          <span><Clock size={17} /> Lun. a vie. 8:00 a.m. - 5:00 p.m.</span>
          <a className="btn btn-primary footer-cta" href={whatsappHref()} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tecno Acero Panamá, S.A. Todos los derechos reservados.</span>
        <span>Desarrollado por <a href="https://www.lulabtech.com/" target="_blank" rel="noreferrer">LulabTech</a></span>
      </div>
    </footer>
  );
}
