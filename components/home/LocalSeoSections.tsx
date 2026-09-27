import Link from "next/link";
import { localServices } from "@/data/seo";
import { Reveal } from "@/components/ui/Reveal";

/** One-page SEO: Tokat anahtar kelime kümeleri (H2 + iç link) */
export function LocalSeoSections() {
  return (
    <section
      className="section-pad border-t border-steel-200 bg-paper"
      aria-labelledby="tokat-hizmetler-baslik"
    >
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Tokat&apos;ta yerli üretim</p>
          <h2
            id="tokat-hizmetler-baslik"
            className="mt-3 max-w-3xl font-display text-display-lg text-ink"
          >
            Tokat pelet sobası, güneş enerjisi ve kangal boru
          </h2>
          <p className="mt-4 max-w-2xl text-base text-steel-500 md:text-lg">
            Arama niyetinize göre üç ana çözüm alanımız: ısıtma (pelet),
            yenilenebilir enerji (güneş) ve plastik boru (kangal). Hepsi
            Tokat&apos;ta üretilir veya yerinden yönetilir.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
              <article
                id={service.homeAnchor}
                className="scroll-mt-24 h-full rounded-panel border border-steel-200 bg-mist p-5 sm:p-6 md:scroll-mt-28 md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                  <Link
                    href={service.path}
                    className="focus-ring hover:text-ember-600 transition-colors"
                  >
                    {service.h1}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-ember-500" aria-hidden>
                        ·
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={service.path}
                    className="focus-ring text-sm font-semibold text-ember-600 hover:text-ember-500"
                  >
                    Detaylı bilgi →
                  </Link>
                  <Link
                    href={service.categoryHref}
                    className="focus-ring text-sm font-semibold text-navy-800 hover:text-ember-600"
                  >
                    Ürünleri gör
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
