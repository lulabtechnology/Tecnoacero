import type { MetadataRoute } from "next";
import { materials } from "@/lib/materials";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/nosotros", "/productos", "/servicios", "/proyectos", "/recursos", "/contacto"];
  return [
    ...pages.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...materials.map((material) => ({
      url: `${site.domain}/productos/${material.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
