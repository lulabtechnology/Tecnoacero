import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Tecno Acero Panamá | Materiales industriales y corte CNC",
    template: "%s | Tecno Acero Panamá",
  },
  description: "Venta de aceros industriales, inoxidables, aluminio, bronces, plásticos de ingeniería, corte CNC plasma, corte a medida, asesoría técnica y entregas en Panamá.",
  keywords: ["acero Panamá", "Tecno Acero Panamá", "aceros industriales", "corte CNC plasma Panamá", "acero inoxidable Panamá", "bronces", "aluminio", "láminas antidesgaste"],
  openGraph: {
    title: "Tecno Acero Panamá",
    description: "Fortalecemos la industria con acero de calidad.",
    url: site.domain,
    siteName: "Tecno Acero Panamá",
    images: [{ url: "/images/hero/hero-industrial-welding.webp", width: 1200, height: 630, alt: "Tecno Acero Panamá" }],
    locale: "es_PA",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
