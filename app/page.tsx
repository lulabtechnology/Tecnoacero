import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Factory, Ruler, ShieldCheck, Truck, Wrench, Layers, MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MaterialCard } from "@/components/MaterialCard";
import { CTA } from "@/components/CTA";
import { featuredMaterials } from "@/lib/materials";
import { whatsappHref } from "@/lib/site";

const services = [
  { icon: Factory, title: "Venta de materiales industriales", text: "Aceros grado maquinaria, inoxidables, aluminio, bronces, nylon, teflón, antidesgaste y línea estructural." },
  { icon: Wrench, title: "Corte CNC plasma", text: "Cortes de precisión en placas para piezas personalizadas y proyectos industriales." },
  { icon: Ruler, title: "Corte a la medida", text: "Material completo o fraccionado para reducir desperdicio y agilizar el trabajo de tus equipos." },
  { icon: Truck, title: "Transporte y entrega", text: "Entregas en ciudad de Panamá, Panamá Oeste e interior del país según coordinación." },
  { icon: ShieldCheck, title: "Asesoría técnica", text: "Apoyo en la selección adecuada de materiales según aplicación, exigencia y disponibilidad." },
  { icon: Layers, title: "Atención de proyectos", text: "Soporte para talleres, constructoras, mantenimiento industrial, marítimo, agroindustria y gobierno." },
];

const sectors = ["Talleres metalmecánicos", "Constructoras", "Sector marítimo y pesquero", "Mantenimiento industrial", "Minería y agroindustria", "Gobierno e ingenios", "Hojalaterías", "Proyectos especiales"];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section about-snapshot">
        <div className="container split-grid">
          <Reveal className="image-stack" direction="left">
            <Image src="/images/sections/bodega-industrial-wow.webp" alt="Inventario industrial Tecno Acero" width={760} height={620} />
            <div className="floating-card">
              <strong>Solución completa</strong>
              <span>Material · Corte · Asesoría · Entrega</span>
            </div>
          </Reveal>
          <Reveal className="content-stack" direction="right">
            <SectionHeading
              eyebrow="Empresa panameña"
              title="Materiales ferrosos y no ferrosos para un mercado industrial en crecimiento."
              text="Tecno Acero Panamá comercializa materiales industriales de alta calidad para la industria metalmecánica y sectores afines, con atención técnica, rapidez y servicio personalizado."
            />
            <div className="check-grid">
              {[
                "Amplia variedad de materiales de alta rotación",
                "Documentación y fichas técnicas por línea de producto",
                "Cortes completos, fracciones y piezas a medida",
                "Atención comercial ágil para continuidad de proyectos",
              ].map((item) => <span key={item}><CheckCircle2 size={18} /> {item}</span>)}
            </div>
            <div className="inline-actions">
              <Link href="/nosotros" className="btn btn-primary">Conocer la empresa <ArrowRight size={18} /></Link>
              <a href="/docs/catalogo-tecno-acero.pdf" className="btn btn-outline" download><Download size={18} /> Descargar catálogo</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Servicios prioritarios"
              title="Aquí consigues el material, lo cortan, te asesoran y te lo entregan rápido."
              text="Una propuesta pensada para compradores industriales que necesitan precisión, disponibilidad y respuesta confiable."
            />
          </Reveal>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <article className="service-card">
                    <Icon size={30} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-row">
            <Reveal>
              <SectionHeading
                eyebrow="Líneas de producto"
                title="Materiales técnicos organizados para cotizar con claridad."
                text="Información técnica organizada para que cada visitante pueda revisar aplicaciones, propiedades y presentaciones antes de solicitar una cotización."
              />
            </Reveal>
            <Reveal direction="right" className="section-actions">
              <Link href="/productos" className="btn btn-primary">Ver todos los productos <ArrowRight size={18} /></Link>
            </Reveal>
          </div>
          <div className="materials-grid featured-materials">
            {featuredMaterials.slice(0, 6).map((material) => <MaterialCard key={material.slug} material={material} compact />)}
          </div>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container sectors-layout">
          <Reveal className="content-stack">
            <SectionHeading
              eyebrow="Clientes que atendemos"
              title="Capacidad para proyectos grandes, pequeños y necesidades urgentes."
              text="Tecno Acero Panamá atiende compradores técnicos, talleres y empresas que necesitan materiales confiables para operación, mantenimiento, fabricación o construcción."
            />
            <div className="sector-tags">
              {sectors.map((sector) => <span key={sector}>{sector}</span>)}
            </div>
          </Reveal>
          <Reveal className="industrial-panel" direction="right">
            <Image src="/images/sections/aplicaciones-industriales-wow.webp" alt="Aplicaciones industriales Tecno Acero" width={720} height={560} />
          </Reveal>
        </div>
      </section>

      <section className="section technical-strip">
        <div className="container technical-inner">
          <Reveal>
            <span className="eyebrow">Información técnica</span>
            <h2>Información técnica clara para cada material.</h2>
            <p>Consulta aplicaciones, propiedades, presentaciones, valores de referencia y composición para tomar mejores decisiones de compra.</p>
          </Reveal>
          <Reveal direction="right" className="technical-card">
            <strong>Catálogo público</strong>
            <p>Documento comercial con las principales líneas de producto de Tecno Acero Panamá.</p>
            <a href="/docs/catalogo-tecno-acero.pdf" download className="btn btn-primary"><Download size={18} /> Descargar catálogo</a>
          </Reveal>
        </div>
      </section>

      <CTA />

      <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp"><MessageCircle size={24} /></a>
    </>
  );
}
