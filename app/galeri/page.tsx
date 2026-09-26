import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Yalçın Isı galeri: pelet sobası, pelet yakıt, güneş enerjisi, rüzgâr ve damlama sulama görselleri.",
  alternates: { canonical: "/galeri" },
};

export default function GaleriPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-900 py-16 text-white md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            Medya
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Galeri
          </h1>
          <p className="mt-4 max-w-xl text-steel-300">
            Üretim ve ürün dünyamızdan seçilmiş görseller — pelet, güneş, rüzgâr
            ve sulama.
          </p>
        </div>
      </div>

      <div className="container-page section-pad">
        <GalleryGrid />
      </div>
    </div>
  );
}
