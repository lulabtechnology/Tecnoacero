import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductExplorer } from "@/components/ProductExplorer";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Productos y materiales industriales",
  description: "Aceros grado maquinaria, inoxidables, antidesgaste, aluminio, bronces, hierro fundido, nylon, teflón, discos Pegatec y acero estructural en Panamá.",
};

const families = [
  {
    title: "Aceros grado maquinaria",
    text: "Barras redondas, cuadradas, hexagonales y materiales para piezas, repuestos y maquinado industrial.",
    image: "/images/products/categoria-maquinaria-wow.webp",
  },
  {
    title: "Aleaciones, inoxidables y perfiles",
    text: "Tubos, perfiles, aluminio, acero inoxidable y materiales con excelente presentación para aplicaciones industriales y estructurales.",
    image: "/images/products/categoria-aleaciones-wow.webp",
  },
  {
    title: "Materiales especiales",
    text: "Bronces, nylon, teflón, discos abrasivos y productos para desgaste, fricción o aplicaciones técnicas específicas.",
    image: "/images/products/categoria-especiales-wow.webp",
  },
];

export default function ProductosPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title="Materiales industriales organizados por línea, aplicación y ficha técnica."
        text="Encuentra información clara sobre presentaciones, propiedades, aplicaciones y valores de referencia para cotizar con mayor precisión."
        image="/images/hero/page-productos.webp"
        mobileImage="/images/hero/page-productos-mobile.webp"
      />
      <section className="section product-signal-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo técnico en web"
              title="Consulta aplicaciones, propiedades y presentaciones por material."
              text="Cada línea cuenta con información ordenada para apoyar la selección del material y agilizar la solicitud de cotización."
            />
          </Reveal>
          <div className="product-signal-grid">
            {families.map((family, index) => (
              <Reveal key={family.title} delay={index * 0.05}>
                <article className="product-signal-card">
                  <div className="product-signal-media">
                    <Image src={family.image} alt={family.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className="product-signal-copy">
                    <h3>{family.title}</h3>
                    <p>{family.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <ProductExplorer />
        </div>
      </section>
      <CTA />
    </>
  );
}