import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProduct() {
  return (
    <section className="section-pad relative overflow-hidden bg-mist" id="enerji">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-navy-900/[0.04] to-transparent"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Öne çıkan · Güneş enerjisi</p>
            <h2 className="mt-3 font-display text-display-lg text-ink">
              Güneş paneliyle elektrik üretimi
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-steel-500 md:text-lg">
              Fotovoltaik güneş paneli sistemleriyle konut, tarım ve tesis
              ihtiyaçlarınıza elektrik üretimi. Kolektör, depo ve sistem
              bileşenleriyle bütünleşik çözümler.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "PV güneş paneli elektrik üretimi",
                "Kolektör ve sıcak su sistemleri",
                "Tokat ve çevresinde keşif / teklif",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-ink md:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/urunler/gunes-paneli-elektrik-uretimi"
                className="btn-primary"
              >
                PV Sistemleri
              </Link>
              <Link
                href="/tokat-gunes-enerjisi"
                className="btn-secondary"
              >
                Tokat güneş enerjisi
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative lg:-mr-6 xl:-mr-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-hero bg-navy-900 shadow-lift">
                <Image
                  src="/images/marketing/gunes-enerjisi-banner.jpg"
                  alt="Tokat güneş enerjisi — kolektör, depo ve güneş paneli sistemleri"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/50 via-transparent to-ember-500/10" />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-card border border-steel-200 bg-paper p-4 shadow-soft md:left-8 md:right-auto md:max-w-xs">
                <p className="font-display text-2xl font-bold text-navy-900">PV</p>
                <p className="mt-1 text-sm text-steel-500">
                  Öz tüketim ve tarımsal enerji uygulamaları
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
