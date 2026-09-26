import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export function WindEnergySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-800 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(242,140,0,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="container-page relative grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            Rüzgâr gülü / RES
          </p>
          <h2 className="mt-3 font-display text-display-lg text-white">
            Ürettiğimiz enerjiyle üretiyoruz.
          </h2>
          <p className="mt-5 max-w-md text-steel-300">
            {company.windPlant.support} destekli proje kapsamında
            gerçekleştirdiğimiz, Tokat&apos;ın ilk lisanssız rüzgâr enerji
            santrali yatırımlarından biri olan tesisimizle, üretimimizin bir
            kısmını kendi ürettiğimiz yenilenebilir enerjiyle karşılıyoruz.
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <div className="font-display text-3xl font-bold md:text-4xl">
                {company.windPlant.powerKw} kW
              </div>
              <div className="mt-1 text-sm text-steel-400">Kurulu güç</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold md:text-4xl">
                {company.windPlant.support}
              </div>
              <div className="mt-1 text-sm text-steel-400">Destekli yatırım</div>
            </div>
          </div>
          <Link
            href="/urunler/ruzgar-enerjisi-santrali"
            className="focus-ring mt-8 inline-flex text-sm font-semibold text-ember-400 hover:text-ember-300"
          >
            Rüzgâr enerjisi detayı →
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-panel border border-white/10 bg-navy-900 shadow-lift">
          <Image
            src="/images/marketing/ruzgar-enerjisi-banner.jpg"
            alt="Yalçın Isı rüzgâr enerjisi — RES ve yenilenebilir üretim"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
