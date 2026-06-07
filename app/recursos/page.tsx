import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { productGroups } from "@/lib/materials";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Recursos y catálogo",
  description: "Descarga el catálogo de Tecno Acero Panamá y consulta información técnica de materiales industriales desde la web.",
};

export default function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Catálogo descargable e información técnica organizada por material."
        text="Descarga el catálogo comercial y consulta información técnica organizada para apoyar la selección de materiales industriales."
        image="/images/hero/page-recursos.webp"
        mobileImage="/images/hero/page-recursos-mobile.webp"
      />

      <section className="section">
        <div className="container resources-grid">
          <Reveal className="download-card" direction="left">
            <div className="download-icon"><Download size={36} /></div>
            <span className="eyebrow">Descarga pública</span>
            <h2>Catálogo Tecno Acero</h2>
            <p>Documento comercial con líneas de productos y referencia general de materiales disponibles.</p>
            <a href="/docs/catalogo-tecno-acero.pdf" className="btn btn-primary" download><Download size={18} /> Descargar catálogo PDF</a>
          </Reveal>
          <Reveal className="resource-info" direction="right">
            <SectionHeading
              eyebrow="Fichas técnicas"
              title="Información técnica organizada por producto."
              text="Cada material cuenta con una página propia con aplicaciones, propiedades, presentaciones, valores de referencia y composición cuando aplica."
            />
            <div className="resource-note"><ShieldCheck size={20} /> La información técnica está presentada de forma clara para facilitar la consulta y la cotización.</div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <Reveal>
            <SectionHeading align="center" eyebrow="Biblioteca técnica" title="Materiales disponibles para consulta" />
          </Reveal>
          <div className="resource-list">
            {productGroups.map((group) => (
              <article key={group.category} className="resource-group">
                <h3>{group.category}</h3>
                {group.items.map((item) => (
                  <Link key={item.slug} href={`/productos/${item.slug}`}>
                    <FileText size={17} /> {item.name}
                  </Link>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}