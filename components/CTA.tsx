import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function CTA({ title = "¿Listo para cotizar tus materiales?", text = "Cuéntanos qué material necesitas, medidas, cantidad o plano. Te orientamos para elegir la opción correcta y preparar una cotización rápida." }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">Cotización y asesoría</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Cotizar por WhatsApp</a>
          <Link className="btn btn-outline" href="/contacto">Formulario de contacto <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
