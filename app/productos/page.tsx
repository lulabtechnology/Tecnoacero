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
    text: "AISI 1018/1020, 1045, 4140, 4340, barra hueca ST52, hierro fundido y otras presentaciones para maquinado y repuestos.",
    image: "/images/client-products/acero-aisi-4140.webp",
  },
  {
    title: "Aceros inoxidables",
    text: "Barras, tubos, láminas, platinas y angulares inoxidables para ambientes con exigencia de corrosión y acabado técnico.",
    image: "/images/client-products/inox-barra-304.webp",
  },
  {
    title: "Bronces y aleaciones no ferrosas",
    text: "Bronce fosforoso, bronce maleable, bronce aluminio y otras opciones para bujes, cojinetes y piezas de fricción.",
    image: "/images/client-products/bronce-aluminio.webp",
  },
  {
    title: "Plásticos de ingeniería",
    text: "Nylon y teflón PTFE en barras y láminas para aplicaciones de baja fricción, deslizamiento y mecanizado técnico.",
    image: "/images/client-products/nylon-barra-negra.webp",
  },
];

export default function ProductosPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title="Materiales industriales organizados por línea, aplicación y ficha técnica."
        text="Encuentra información clara sobre presentaciones, propiedades, aplicaciones y valores de referencia para cotizar con mayor precisión."
        mobileImage="/images/hero/page-productos-mobile.webp"
        image="/images/hero/page-productos.webp"
      />
      <section className="section product-signal-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo técnico en web"
              title="Consulta aplicaciones, propiedades y presentaciones por material."
              text="Ahora la web integra imágenes reales de productos suministradas por Tecno Acero Panamá para reforzar la identidad del catálogo y mostrar mejor cada línea comercial."
            />
          </Reveal>
          <div className="product-signal-grid product-signal-grid-four">
            {families.map((family, index) => (
              <Reveal key={family.title} delay={index * 0.05}>
                <article className="product-signal-card">
                  <div className="product-signal-media">
                    <Image src={family.image} alt={family.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
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
