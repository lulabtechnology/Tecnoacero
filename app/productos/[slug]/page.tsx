import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { getMaterial, materials } from "@/lib/materials";
import { whatsappHref } from "@/lib/site";
import { CTA } from "@/components/CTA";

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  const material = getMaterial(slug);
  if (!material) return { title: "Material no encontrado" };
  return {
    title: material.name,
    description: `${material.name}: aplicaciones, propiedades, presentaciones y valores de referencia disponibles en Tecno Acero Panamá.`,
  };
}

export default function MaterialPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const material = getMaterial(slug);
  if (!material) notFound();

  return (
    <>
      <section className="material-hero">
        <Image src={material.image} alt={material.name} fill priority />
        <div className="hero-overlay" />
        <div className="container material-hero-content">
          <Link href="/productos" className="back-link"><ArrowLeft size={17} /> Volver a productos</Link>
          <span className="eyebrow">{material.category}</span>
          <h1>{material.name}</h1>
          <p>{material.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappHref(`Hola, vengo de la web de Tecno Acero Panamá y deseo cotizar: ${material.name}.`)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Cotizar este material</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container material-detail-grid">
          <div className="material-main">
            <article className="detail-card large">
              <span>Aplicación</span>
              <h2>¿Para qué se utiliza?</h2>
              <p>{material.application}</p>
            </article>
            <article className="detail-card large">
              <span>Propiedades</span>
              <h2>Características principales</h2>
              <p>{material.properties}</p>
            </article>
            <article className="detail-card large">
              <span>Presentaciones</span>
              <h2>Formatos disponibles</h2>
              <div className="presentation-list">
                {material.presentations.map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
              </div>
            </article>
          </div>
          <aside className="material-side">
            <div className="spec-card">
              <h3>Valores de referencia</h3>
              <div className="spec-list">
                {material.specs.map((spec) => (
                  <div key={`${spec.label}-${spec.value}`}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            {material.chemistry && (
              <div className="spec-card muted">
                <h3>Composición química</h3>
                <div className="chem-grid">
                  {material.chemistry.map((item) => (
                    <div key={`${item.label}-${item.value}`}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="spec-card uses">
              <h3>Usos frecuentes</h3>
              {material.uses.map((use) => <span key={use}>{use}</span>)}
            </div>
          </aside>
        </div>
      </section>
      <CTA title={`Cotiza ${material.name} con Tecno Acero Panamá`} text="Indícanos medida, cantidad, presentación, urgencia y cualquier plano o especificación técnica para preparar una respuesta más precisa." />
    </>
  );
}
