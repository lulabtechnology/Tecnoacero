"use client";

import { useMemo, useState } from "react";
import { Mail, MessageCircle, Paperclip } from "lucide-react";
import { site } from "@/lib/site";

const initial = {
  nombre: "",
  empresa: "",
  telefono: "",
  correo: "",
  material: "",
  urgencia: "",
  mensaje: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);

  const message = useMemo(() => {
    return [
      "Hola, vengo de la web de Tecno Acero Panamá y deseo solicitar una cotización.",
      form.nombre && `Nombre: ${form.nombre}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.telefono && `Teléfono: ${form.telefono}`,
      form.correo && `Correo: ${form.correo}`,
      form.material && `Material / servicio: ${form.material}`,
      form.urgencia && `Urgencia: ${form.urgencia}`,
      form.mensaje && `Detalle: ${form.mensaje}`,
    ].filter(Boolean).join("\n");
  }, [form]);

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Solicitud de cotización desde la web")}&body=${encodeURIComponent(message)}`;

  const update = (field: keyof typeof initial) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-row two">
        <label>Nombre completo<input value={form.nombre} onChange={update("nombre")} placeholder="Ej. Alberto Aguilar" /></label>
        <label>Empresa<input value={form.empresa} onChange={update("empresa")} placeholder="Nombre de la empresa" /></label>
      </div>
      <div className="form-row two">
        <label>Teléfono / WhatsApp<input value={form.telefono} onChange={update("telefono")} placeholder="+507 ..." /></label>
        <label>Correo<input type="email" value={form.correo} onChange={update("correo")} placeholder="correo@empresa.com" /></label>
      </div>
      <div className="form-row two">
        <label>Material o servicio requerido
          <select value={form.material} onChange={update("material")}>
            <option value="">Seleccionar</option>
            <option>Aceros grado maquinaria</option>
            <option>Acero inoxidable 304 / 316L</option>
            <option>Láminas antidesgaste 450 / 500</option>
            <option>Aluminio / Bronces</option>
            <option>Nylon / Teflón</option>
            <option>Corte CNC plasma</option>
            <option>Corte a la medida</option>
            <option>Transporte / entrega</option>
            <option>Otro</option>
          </select>
        </label>
        <label>Urgencia
          <select value={form.urgencia} onChange={update("urgencia")}>
            <option value="">Seleccionar</option>
            <option>Entrega inmediata</option>
            <option>Esta semana</option>
            <option>Proyecto en planificación</option>
            <option>Solo consulta técnica</option>
          </select>
        </label>
      </div>
      <label>Medidas, cantidades, planos o especificaciones
        <textarea value={form.mensaje} onChange={update("mensaje")} placeholder="Ej. Barra redonda AISI 1045, diámetro 2 pulgadas, cantidad 3 piezas de 1 metro..." rows={6} />
      </label>
      <div className="file-note"><Paperclip size={17} /> Para adjuntar planos o fotos, envía el archivo por WhatsApp o correo después de abrir tu solicitud.</div>
      <div className="form-actions">
        <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Enviar por WhatsApp</a>
        <a className="btn btn-outline" href={mailto}><Mail size={18} /> Enviar por correo</a>
      </div>
    </form>
  );
}
