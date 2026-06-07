import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Factory, Layers, MessageCircle, Ruler, ShieldCheck, Truck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios industriales",
  description: "Venta de materiales industriales, corte CNC plasma, corte a la medida, transporte, entregas y asesoría técnica en Panamá.",
};

const services = [
  {
    icon: Factory,
    title: "Venta de aceros industriales y materiales especiales",
    image: "/images/sections/bodega-industrial.webp",
    text: "La línea comercial principal: aceros grado maquinaria, acero inoxidable 304 y 316L, láminas antidesgaste, bronces, aluminios, nylon, teflón, discos Pegatec y acero estructural.",
    bullets: ["Variedad de materiales", "Disponibilidad de alta rotación", "Material completo o fraccionado", "Soporte para compras industriales"],
  },
  {
    icon: Wrench,
    title: "Corte CNC plasma",
    image: "/images/products/corte-cnc-plasma.webp",
    text: "Servicio orientado a piezas personalizadas, placas y cortes de precisión para proyectos que necesitan rapidez y acabado técnico.",
    bullets: ["Corte a la medida", "Piezas personalizadas", "Rapidez operativa", "Ideal para planos y requerimientos específicos"],
  },
  {
    icon: Ruler,
    title: "Corte de materiales a la medida",
    image: "/images/products/laminas-antidesgaste.webp",
    text: "Preparamos materiales en medidas solicitadas para optimizar tiempo, reducir desperdicio y facilitar el trabajo del cliente.",
    bullets: ["Fracciones según necesidad", "Reducción de desperdicio", "Atención personalizada", "Material listo para trabajar"],
  },
  {
    icon: Truck,
    title: "Transporte y entrega",
    image: "/images/sections/entrega-industrial.webp",
    text: "Servicio importante para empresas que necesitan cumplimiento, rapidez y logística confiable en ciudad de Panamá, Panamá Oeste e interior.",
    bullets: ["Entregas rápidas", "Coordinación por proyecto", "Cobertura nacional", "Apoyo a continuidad operativa"],
  },
  {
    icon: Layers,
    title: "Atención de proyectos grandes y pequeños",
    image: "/images/sections/aplicaciones-industriales.webp",
    text: "Flexibilidad para atender talleres, constructoras, mantenimiento, agroindustria, marítimo, gobierno y proyectos industriales de diferentes escalas.",
    bullets: ["Proyectos industriales", "Talleres y constructoras", "Mantenimiento", "Compras recurrentes"],
  },
  {
    icon: ShieldCheck,
    title: "Asesoría técnica y atención personalizada",
    image: "/images/sections/asesoria-tecnica.webp",
    text: "Acompañamiento para seleccionar materiales según aplicación, maquinado, corrosión, desgaste, disponibilidad y requerimiento técnico.",
    bullets: ["Orientación técnica", "Recomendaciones expertas", "Atención humana", "Mayor confianza al comprar"],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Servicios</span>
            <h1>Soluciones industriales para comprar, cortar, preparar y recibir materiales con confianza.</h1>
            <p>Un ecosistema comercial pensado para que el cliente encuentre material, reciba asesoría y avance con sus proyectos sin perder tiempo.</p>
          </Reveal>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container service-detail-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <article className={`service-detail ${index % 2 ? "reverse" : ""}`}>
                  <div className="service-detail-image">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 45vw" />
                  </div>
                  <div className="service-detail-copy">
                    <Icon size={34} />
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                    <div className="check-grid vertical">
                      {service.bullets.map((bullet) => <span key={bullet}><CheckCircle2 size={17} /> {bullet}</span>)}
                    </div>
                    <a className="btn btn-primary" href={whatsappHref(`Hola, vengo de la web de Tecno Acero Panamá. Deseo consultar sobre: ${service.title}.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar servicio</a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
