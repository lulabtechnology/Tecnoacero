import type { Metadata } from "next";
import { Clock, Instagram, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Tecno Acero Panamá para cotizar materiales industriales, corte CNC plasma, corte a la medida y entregas.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contacto</span>
            <h1>Solicita una cotización con medidas, material o plano de referencia.</h1>
            <p>Indícanos el material, cantidad, presentación, urgencia y cualquier especificación para darte una respuesta más precisa.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-info" direction="left">
            <SectionHeading eyebrow="Canales oficiales" title="Estamos listos para atender tu solicitud." text="Puedes escribir por WhatsApp, llamar, enviar correo o visitar la galera en Río Abajo." />
            <div className="contact-methods">
              <a href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={22} /><span><strong>WhatsApp</strong>{site.whatsapp.replace("507", "+507 ")}</span></a>
              <a href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}><PhoneCall size={22} /><span><strong>Teléfonos</strong>{site.phones.join(" / ")}</span></a>
              <a href={`mailto:${site.email}`}><Mail size={22} /><span><strong>Correo</strong>{site.email}</span></a>
              <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={22} /><span><strong>Instagram</strong>{site.instagramLabel}</span></a>
              <span><Clock size={22} /><span><strong>Horario</strong>{site.schedule.join(" · ")}</span></span>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer"><MapPin size={22} /><span><strong>Dirección</strong>{site.address}</span></a>
            </div>
          </Reveal>
          <Reveal className="form-card" direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Mapa Tecno Acero Panamá"
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
