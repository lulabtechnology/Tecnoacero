export const site = {
  name: "Tecno Acero Panamá, S.A.",
  legalName: "TECNO ACERO PANAMÁ, S.A.",
  slogan: "Fortalecemos la industria con acero de calidad.",
  domain: "https://www.tecnoaceropanama.com",
  address: "Río Abajo, calle 7, frente a Unicola, galera color gris.",
  phones: ["507-397-0229", "397-0228"],
  whatsapp: "50763960086",
  email: "info@tecnoaceropanama.com",
  instagram: "https://www.instagram.com/tecnoaceropanama",
  instagramLabel: "@tecnoaceropanama",
  schedule: ["Lunes a viernes 8:00 a.m. a 5:00 p.m.", "Sábados 8:00 a.m. a 12:00 p.m.", "Días feriados cerrado"],
  mapQuery: "Rio Abajo calle 7 frente a Unicola Tecno Acero Panama",
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export function whatsappHref(message = "Hola, vengo de la web de Tecno Acero Panamá y deseo solicitar una cotización.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}
