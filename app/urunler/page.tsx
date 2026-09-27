import type { Metadata } from "next";
import Link from "next/link";
import { getCategory, productGroups } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { site } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Ürünler | Pelet, Enerji Sistemleri, Kangal Boru, Elektrik Panoları",
  description:
    "Yalçın Isı ürünleri: YPS pelet sobası ve çam pelet, 3–11 kW güneş enerji sistemleri, 6/10 ATÜ PE kangal boru, damlama sulama ve elektrik panoları. Tokat yerli üretim.",
  alternates: { canonical: "/urunler" },
};

export default function ProductsPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-12 text-white sm:py-16 md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            Tokat · Yerli üretim
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Ürünler
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-300 sm:text-lg">
            Isı sistemleri, enerji ve endüstriyel çözümler — dört ana ürün
            grubumuzu inceleyin.
          </p>
          <nav
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Ürün grupları"
          >
            {productGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="focus-ring inline-flex min-h-[40px] items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white hover:bg-white/20"
              >
                {g.name}
              </a>
            ))}
            <a
              href={site.catalogPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-[40px] items-center rounded-full bg-ember-500 px-4 text-sm font-semibold text-white hover:bg-ember-600"
            >
              PDF Katalog
            </a>
          </nav>
        </div>
      </div>

      {productGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-baslik`}
          className={`scroll-mt-20 py-12 sm:py-16 ${gi % 2 ? "bg-mist" : "bg-paper"}`}
        >
          <div className="container-page">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">{group.name}</p>
                <h2
                  id={`${group.id}-baslik`}
                  className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl"
                >
                  {group.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-steel-500 sm:text-base">
                  {group.description}
                </p>
              </div>
              {group.landing && (
                <Link
                  href={group.landing}
                  className="focus-ring shrink-0 text-sm font-semibold text-ember-600 hover:text-ember-500"
                >
                  Tokat bilgi sayfası →
                </Link>
              )}
            </div>

            {group.categories.map((slug) => {
              const category = getCategory(slug);
              const products = getProductsByCategory(slug);
              if (!category || products.length === 0) return null;
              return (
                <div key={slug} className="mt-10">
                  <div className="flex items-baseline justify-between gap-4 border-b border-steel-200 pb-3">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {category.name}
                    </h3>
                    <Link
                      href={`/urunler/kategori/${slug}`}
                      className="focus-ring shrink-0 text-sm font-medium text-navy-800 hover:text-ember-600"
                    >
                      Kategori ({products.length}) →
                    </Link>
                  </div>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
