import type { Metadata } from "next";
import Image from "next/image";
import { Anchor, Building2, Factory, Hammer, Tractor, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Proyectos y aplicaciones industriales",
  description: "Aplicaciones de materiales industriales para talleres metalmecánicos, constructoras, sector marítimo, mantenimiento industrial, minería, agroindustria y gobierno.",
};

const sectors = [
  { icon: Hammer, title: "Talleres metalmecánicos", text: "Barras, platinas, aceros grado maquinaria y cortes para piezas, repuestos y fabricación." },
  { icon: Building2, title: "Constructoras", text: "Acero estructural, perfiles A36, láminas, tubos y soluciones para obra y mantenimiento." },
  { icon: Anchor, title: "Sector marítimo y pesquero", text: "Aceros inoxidables, materiales resistentes a corrosión y piezas para ambientes exigentes." },
  { icon: Wrench, title: "Mantenimiento industrial", text: "Materiales especiales para paradas, repuestos, bujes, ejes, placas y mejoras operativas." },
  { icon: Tractor, title: "Minería y agroindustria", text: "Láminas antidesgaste, componentes de alta resistencia y materiales para alto desgaste." },
  { icon: Factory, title: "Gobierno, ingenios y empresas", text: "Atención de compras por volumen, proyectos planificados y requerimientos recurrentes." },
];

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos y aplicaciones"
        title="Materiales preparados para sectores que no pueden detener su operación."
        text="Soluciones para talleres, constructoras, sector marítimo, mantenimiento, agroindustria y empresas que requieren materiales confiables para operar sin interrupciones."
        image="/images/hero/page-proyectos.webp"
        mobileImage="/images/hero/page-proyectos-mobile.webp"
      />

      <section className="section">
        <div className="container split-grid">
          <Reveal className="image-stack" direction="left">
            <Image src="/images/sections/aplicaciones-industriales-wow.webp" alt="Aplicaciones industriales" width={760} height={620} />
            <div className="floating-card">
              <strong>Aplicación correcta</strong>
              <span>Material seleccionado según exigencia del proyecto.</span>
            </div>
          </Reveal>
          <Reveal className="content-stack" direction="right">
            <SectionHeading
              eyebrow="Enfoque comercial"
              title="Capacidad, orden y confianza para cada tipo de proyecto."
              text="Tecno Acero Panamá atiende desde solicitudes rápidas de talleres hasta necesidades de empresas industriales, constructoras, marítimas, agroindustriales y de mantenimiento."
            />
            <p className="lead-box">Desde solicitudes rápidas hasta proyectos planificados, el equipo puede orientar la compra según aplicación, medida, disponibilidad y exigencia del trabajo.</p>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <Reveal>
            <SectionHeading align="center" eyebrow="Sectores" title="Soluciones por tipo de cliente" text="La estructura permite que cada visitante se identifique con su industria y avance hacia cotización." />
          </Reveal>
          <div className="service-grid">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Reveal key={sector.title} delay={index * 0.04}>
                  <article className="service-card">
                    <Icon size={30} />
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA title="¿Tu proyecto necesita un material específico?" text="Envíanos aplicación, medida, cantidad, plano o foto de referencia para ayudarte a cotizar la opción adecuada." />
    </>
  );
}