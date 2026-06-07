import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Gem, Handshake, Lightbulb, Shield, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Tecno Acero Panamá, empresa panameña dedicada a comercializar materiales ferrosos y no ferrosos para la industria metalmecánica.",
};

const values = [
  { icon: Gem, title: "Calidad", text: "Productos alineados con altos estándares del mercado y documentación técnica de respaldo." },
  { icon: Handshake, title: "Compromiso", text: "Dedicación al éxito de los clientes y al desarrollo sostenible de la industria panameña." },
  { icon: Lightbulb, title: "Innovación", text: "Búsqueda constante de mejores formas de servir y optimizar procesos." },
  { icon: Shield, title: "Integridad", text: "Actuamos con honestidad, transparencia y ética en cada proceso." },
  { icon: Users, title: "Trabajo en equipo", text: "Colaboración, respeto mutuo y atención humana para resolver mejor cada solicitud." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="page-hero small">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Nosotros</span>
            <h1>Una empresa panameña enfocada en fortalecer la industria con acero de calidad.</h1>
            <p>Comercializamos materiales ferrosos y no ferrosos para la industria metalmecánica y sectores afines, con servicio técnico, rapidez y atención personalizada.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <Reveal className="content-stack" direction="left">
            <SectionHeading
              eyebrow="Quiénes somos"
              title="Materiales de alta calidad para necesidades industriales reales."
              text="Mantenemos un alto grado de calidad en nuestros productos y nos enfocamos en ofrecer el mejor servicio a nuestros clientes, respondiendo a un mercado en constante crecimiento."
            />
            <div className="check-grid vertical">
              <span><CheckCircle2 size={18} /> Atención personalizada y asesoría técnica durante el proceso.</span>
              <span><CheckCircle2 size={18} /> Recomendaciones expertas para seleccionar el material adecuado.</span>
              <span><CheckCircle2 size={18} /> Fichas técnicas y documentación de fábrica por materiales.</span>
              <span><CheckCircle2 size={18} /> Precios competitivos y enfoque comercial orientado al cliente.</span>
            </div>
          </Reveal>
          <Reveal className="image-stack" direction="right">
            <Image src="/images/sections/asesoria-tecnica.webp" alt="Asesoría técnica Tecno Acero" width={760} height={620} />
            <div className="floating-card floating-card-light">
              <strong>Atención técnica</strong>
              <span>Selección correcta del material según aplicación.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section mission-section">
        <div className="container mission-grid">
          <Reveal>
            <article className="mission-card">
              <span>Misión</span>
              <h2>Productos y servicios metalúrgicos de excelencia.</h2>
              <p>Brindar a nuestros clientes productos y servicios metalúrgicos adaptados a sus necesidades, con enfoque en calidad, eficiencia y compromiso para contribuir al crecimiento del sector industrial panameño.</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="mission-card accent">
              <span>Visión</span>
              <h2>Ser siempre la mejor opción en venta de aceros en Panamá.</h2>
              <p>Ser una empresa sólida, enfocada en cumplir los más altos estándares de calidad y servicio para convertirse en la alternativa confiable de compradores industriales.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading align="center" eyebrow="Valores" title="Una cultura de servicio construida sobre confianza." />
          </Reveal>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.04}>
                  <article className="value-card">
                    <Icon size={28} />
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA title="¿Necesitas apoyo para seleccionar un material?" text="Nuestro equipo puede orientarte según medida, aplicación, esfuerzo, ambiente de trabajo y disponibilidad." />
    </>
  );
}
