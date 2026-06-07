"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, materials } from "@/lib/materials";
import { MaterialCard } from "@/components/MaterialCard";

export function ProductExplorer() {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return materials.filter((material) => {
      const matchCategory = category === "Todos" || material.category === category;
      const matchQuery = !q || [material.name, material.category, material.badge, material.intro, material.application, ...material.uses].join(" ").toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <div className="product-explorer">
      <div className="explorer-controls">
        <div className="search-box">
          <Search size={19} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar material, aplicación o grado..." />
        </div>
        <div className="category-pills" role="tablist" aria-label="Categorías de productos">
          {["Todos", ...categories].map((item) => (
            <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="materials-grid">
        {filtered.map((material) => <MaterialCard key={material.slug} material={material} />)}
      </div>
      {filtered.length === 0 && <div className="empty-state">No encontramos coincidencias. Escríbenos por WhatsApp y te ayudamos a ubicar el material correcto.</div>}
    </div>
  );
}
