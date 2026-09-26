import Link from "next/link";
import type { LocalService } from "@/data/seo";
import { localServices } from "@/data/seo";
import { site } from "@/data/site";
import { buildServiceJsonLd } from "@/lib/json-ld";

type Props = {
  service: LocalService;
};

export function LocalServicePage({ service }: Props) {
  const jsonLd = buildServiceJsonLd(service);
  const others = localServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-paper">
        <header className="border-b border-steel-200 bg-mist">
          <div className="container-page py-16 md:py-20">
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
            <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-steel-500">{service.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/iletisim#teklif"
                className="focus-ring inline-flex items-center rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href={service.categoryHref}
                className="focus-ring inline-flex items-center rounded-md border border-navy-800/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:border-ember-500 hover:text-ember-600 transition-colors"
              >
                Ürünleri incele
              </Link>
              <a
                href={site.phoneHref}
                className="focus-ring inline-flex items-center rounded-md border border-navy-800/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:border-ember-500 transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </header>

        <div className="container-page py-16 md:py-20">
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
              <div className="border border-steel-200 bg-mist p-6">
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
      </article>
    </>
  );
}
