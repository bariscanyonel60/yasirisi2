"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryFilters, galleryItems } from "@/data/gallery";
import { hasKnownProductImage } from "@/components/products/ProductImage";

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");

  const items = useMemo(() => {
    const list =
      filter === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter);
    return list.filter((i) => hasKnownProductImage(i.src));
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === f.id
                ? "bg-navy-900 text-white"
                : "bg-mist text-ink hover:bg-steel-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.src + item.title}
            className="group overflow-hidden rounded-panel border border-steel-200 bg-paper shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="p-4">
              <p className="font-display text-base font-bold text-ink">
                {item.title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-steel-400">
                {item.category}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-10 text-center text-steel-500">
          Bu kategoride henüz görsel yok.
        </p>
      )}
    </div>
  );
}
