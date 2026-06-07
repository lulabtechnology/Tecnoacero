import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Material } from "@/lib/materials";

export function MaterialCard({ material, compact = false }: { material: Material; compact?: boolean }) {
  return (
    <article className={`material-card ${compact ? "compact" : ""}`}>
      <div className="material-image">
        <Image src={material.image} alt={material.name} fill sizes="(max-width: 900px) 100vw, 33vw" />
        <span>{material.badge}</span>
      </div>
      <div className="material-body">
        <small>{material.category}</small>
        <h3>{material.name}</h3>
        <p>{material.intro}</p>
        <Link href={`/productos/${material.slug}`} className="text-link">Ver ficha en web <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
}
