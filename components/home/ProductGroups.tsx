import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { hasKnownProductImage } from "@/components/products/ProductImage";
import { Reveal } from "@/components/ui/Reveal";

const featuredSlugs = [
  "pelet-sobalari",
  "gunes-enerji-sistemleri",
  "kangal-borular",
] as const;

const secondarySlugs = [
  "damlama-sulama-borulari",
  "ruzgar-enerjisi",
  "pelet-yakit",
  "sulama-baglanti-parcalari",
  "elektrik-panolari",
] as const;

/** Kategori görseli yoksa marketing fallback */
const imageFallback: Record<string, string> = {
  "pelet-sobalari": "/images/categories/pelet-sobalari.jpg",
  "gunes-enerji-sistemleri": "/images/categories/gunes-enerjisi.jpg",
  "kangal-borular": "/images/categories/kangal-borular.jpg",
  "damlama-sulama-borulari": "/images/categories/damlama-sulama.jpg",
  "ruzgar-enerjisi": "/images/categories/ruzgar-enerjisi.jpg",
  "pelet-yakit": "/images/categories/pelet-yakit.jpg",
  "sulama-baglanti-parcalari": "/images/categories/sulama-baglanti.jpg",
  "elektrik-panolari": "/images/categories/elektrik-panolari.jpg",
};

function CategoryCard({
  slug,
  large,
}: {
  slug: string;
  large?: boolean;
}) {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return null;
  const imageSrc =
    (hasKnownProductImage(cat.image) && cat.image) ||
    imageFallback[slug] ||
    "/images/marketing/header-banner.jpg";

  return (
    <Link
      href={`/urunler/kategori/${cat.slug}`}
      className={`focus-ring group relative flex flex-col justify-end overflow-hidden rounded-panel bg-navy-900 ${
        large ? "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]" : "min-h-[220px] sm:min-h-[240px] md:min-h-[280px]"
      }`}
    >
      <Image
        src={imageSrc}
        alt={`${cat.name} — Yalçın Isı`}
        fill
        sizes={
          large
            ? "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        }
        className="object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/50 to-transparent" />
      <div className="relative p-6 md:p-8">
        <h3
          className={`font-display font-bold text-white ${
            large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {cat.name}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel-300 line-clamp-2">
          {cat.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ember-400 transition-transform group-hover:translate-x-1">
          Ürünleri İncele
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export function ProductGroups() {
  return (
    <section className="section-pad bg-mist" id="urun-gruplari">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Ürün grupları</p>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-ink">
            Tek Çatı Altında Güçlü Çözümler
          </h2>
          <p className="mt-4 max-w-xl text-base text-steel-500 md:text-lg">
            Isı, enerji ve altyapı ihtiyaçları için geliştirdiğimiz ürün
            gruplarını keşfedin.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {featuredSlugs.map((slug, i) => (
            <Reveal key={slug} delay={i * 60} className={i === 0 ? "md:col-span-1" : ""}>
              <CategoryCard slug={slug} large />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 md:gap-5 lg:grid-cols-6">
          {secondarySlugs.map((slug, i) => (
            <Reveal
              key={slug}
              delay={i * 50}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <CategoryCard slug={slug} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
