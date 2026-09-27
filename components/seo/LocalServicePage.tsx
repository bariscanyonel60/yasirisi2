import Link from "next/link";
import type { LocalService } from "@/data/seo";
import { localServices } from "@/data/seo";
import { site } from "@/data/site";
import { getProductGroupByLanding } from "@/data/categories";
import { getProductsAcrossCategories } from "@/data/products";
import { buildServiceJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductCard } from "@/components/products/ProductCard";

type Props = {
  service: LocalService;
};

export function LocalServicePage({ service }: Props) {
  const jsonLd = buildServiceJsonLd(service);
  const others = localServices.filter((s) => s.slug !== service.slug);
  const group = getProductGroupByLanding(service.path);
  const products = group
    ? getProductsAcrossCategories(group.categories, 6)
    : [];

  return (
    <>
      <JsonLd data={jsonLd} />

      <article className="bg-paper">
        <header className="border-b border-steel-200 bg-mist">
          <div className="container-page py-12 sm:py-16 md:py-20">
            <nav className="text-sm text-steel-400" aria-label="Breadcrumb">
              <Link href="/" className="focus-ring hover:text-ink">
                Ana Sayfa
              </Link>
              <span className="mx-1.5">/</span>
              <span className="text-ink">{service.h1}</span>
            </nav>

            <p className="mt-6 text-sm font-medium tracking-wide text-ember-600">
              {service.eyebrow} · Tokat
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-steel-500 sm:text-lg">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/iletisim#teklif" className="btn-primary w-full sm:w-auto">
                {service.ctaLabel}
              </Link>
              <Link href={service.categoryHref} className="btn-secondary w-full sm:w-auto">
                Ürünleri incele
              </Link>
              <a href={site.phoneHref} className="btn-secondary w-full sm:w-auto">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </header>

        <div className="container-page py-12 sm:py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-steel-500 md:text-lg">
              {service.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}

              <h2 className="pt-4 font-display text-2xl font-bold text-ink">
                Neler sunuyoruz?
              </h2>
              <ul className="space-y-3 text-ink">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-panel border border-steel-200 bg-mist p-6">
                <h2 className="font-display text-lg font-bold text-ink">
                  İletişim
                </h2>
                <p className="mt-2 text-sm text-steel-500">{site.officeAddress}</p>
                <p className="mt-1 text-sm text-steel-500">{site.factoryAddress}</p>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-block text-sm font-semibold text-ember-600 hover:text-ember-500"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div>
                <h2 className="font-display text-lg font-bold text-ink">
                  Diğer Tokat çözümleri
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.path}
                        className="focus-ring font-medium text-navy-800 hover:text-ember-600"
                      >
                        {s.h1}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/#tokat-hizmetler-baslik"
                      className="focus-ring text-steel-500 hover:text-ember-600"
                    >
                      Ana sayfa özeti
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {products.length > 0 && (
          <section
            className="border-t border-steel-200 bg-mist py-12 sm:py-16"
            aria-labelledby="yerel-urunler-baslik"
          >
            <div className="container-page">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2
                  id="yerel-urunler-baslik"
                  className="font-display text-2xl font-bold text-ink sm:text-3xl"
                >
                  {service.h1} — öne çıkan ürünler
                </h2>
                <Link
                  href={group ? `/urunler#${group.id}` : "/urunler"}
                  className="focus-ring shrink-0 text-sm font-semibold text-ember-600 hover:text-ember-500"
                >
                  Tüm ürünler →
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
