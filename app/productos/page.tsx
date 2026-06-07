import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductExplorer } from "@/components/ProductExplorer";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Productos y materiales industriales",
  description: "Aceros grado maquinaria, inoxidables, antidesgaste, aluminio, bronces, hierro fundido, nylon, teflón, discos Pegatec y acero estructural en Panamá.",
};

export default function ProductosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Productos</span>
            <h1>Materiales industriales organizados por línea, aplicación y ficha técnica.</h1>
            <p>Encuentra información clara sobre presentaciones, propiedades, aplicaciones y valores de referencia para cotizar con mayor precisión.</p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo técnico en web"
              title="Consulta la información de cada material sin descargar las fichas técnicas."
              text="El único documento descargable público es el catálogo. Las fichas técnicas fueron transformadas en páginas de información por material para una experiencia más profesional."
            />
          </Reveal>
          <ProductExplorer />
        </div>
      </section>
      <CTA />
    </>
  );
}
