# Tecno Acero Panamá — Web institucional multipágina

Proyecto preparado para GitHub + Vercel con Next.js App Router, React, TypeScript, Motion y diseño responsive.

## Incluye

- Home institucional con hero animado y CTA de cotización.
- Páginas multipágina: Inicio, Nosotros, Productos, Servicios, Proyectos / Aplicaciones, Recursos y Contacto.
- Páginas individuales para materiales: AISI 1018/1020, AISI 1045, AISI 4140, AISI 4340, Barra Hueca ST52, Inox 304, Inox 316L, Antidesgaste 450/500, Fundición GG-25, Aluminio 6061, Bronces, Nylon, Teflón, Discos Pegatec y Acero estructural A36.
- Catálogo PDF descargable en `public/docs/catalogo-tecno-acero.pdf`.
- Las fichas técnicas NO se dejaron como descarga pública; su información fue convertida a contenido web por material, según indicación del cliente.
- Imágenes industriales generadas y optimizadas en WebP dentro de `public/images`.
- Logo vectorial preparado para web en `public/brand/logo-tecno-acero.svg`, con el logo original recibido guardado como referencia.
- SEO base: metadata, Open Graph, robots y sitemap dinámico.
- Formulario de contacto estático que arma mensaje para WhatsApp o correo, ideal para Vercel sin backend.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run start
```

## Deploy en Vercel

1. Subir este proyecto a GitHub.
2. Crear proyecto en Vercel e importar el repositorio.
3. Framework: Next.js.
4. Build command: `npm run build`.
5. Output: automático de Next.js.
6. Apuntar el dominio `www.tecnoaceropanama.com` desde DNS.

## Pendientes recomendados antes de publicar

- Reemplazar las imágenes generadas por fotos reales cuando el cliente las entregue, manteniendo las mismas rutas si se desea evitar cambios de código.
- Confirmar ubicación exacta para mapa si desean un pin más preciso.
- Confirmar si desean mostrar más redes sociales además de Instagram.
- Probar correos y WhatsApp en producción.

## Estructura clave

- `lib/site.ts`: datos de contacto, dominio, WhatsApp y navegación.
- `lib/materials.ts`: información técnica y comercial de todos los materiales.
- `components/`: componentes reutilizables y animaciones Motion.
- `app/`: páginas públicas del sitio.
- `public/docs/`: catálogo descargable.
- `public/images/`: imágenes optimizadas.
