import Image from "next/image";
import Link from "next/link";
import { certificates, certificatesCollage } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { hasKnownProductImage } from "@/components/products/ProductImage";

export function CertificatesStrip() {
  const hasCollage = hasKnownProductImage(certificatesCollage);

  return (
    <section className="section-pad bg-mist">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Kalite</p>
              <h2 className="mt-3 max-w-xl font-display text-display-lg text-ink">
                Kalitemizi Belgelerimizle Destekliyoruz
              </h2>
            </div>
            <Link
              href="/belgelerimiz"
              className="focus-ring text-sm font-semibold text-ember-600 hover:text-ember-500"
            >
              Tüm belgeler →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={i * 30}>
                <article className="rounded-card border border-steel-200 bg-paper p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                    {c.year}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-steel-500">{c.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {hasCollage && (
            <Reveal delay={80}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-panel border border-steel-200 bg-paper shadow-soft">
                <Image
                  src={certificatesCollage}
                  alt="Yalçın Isı kalite ve teşekkür belgeleri"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
