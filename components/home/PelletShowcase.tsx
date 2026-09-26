import Link from "next/link";
import {
  getFeaturedPelletStoves,
  pelletFeatures,
} from "@/data/products";
import { ProductImage } from "@/components/products/ProductImage";
import { Reveal } from "@/components/ui/Reveal";

export function PelletShowcase() {
  const stoves = getFeaturedPelletStoves();

  return (
    <section
      className="section-pad relative overflow-hidden bg-navy-900 text-white"
      id="pelet-sobalari"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-navy-600/40 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
                Pelet sobaları
              </p>
              <h2 className="mt-3 font-display text-display-lg text-white">
                Doğal Isının Modern Teknolojiyle Buluştuğu Nokta
              </h2>
              <p className="mt-4 max-w-lg text-steel-300">
                YPS serisi — temiz enerji, sıcak yuva. Sıcaklık her yerde
                sizinle.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pelletFeatures.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-steel-200"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/urunler/kategori/pelet-sobalari"
              className="focus-ring shrink-0 text-sm font-semibold text-ember-400 hover:text-ember-300"
            >
              Tüm YPS serisini gör →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {stoves.map((stove, i) => (
            <Reveal key={stove.id} delay={i * 50} className="snap-start">
              <Link
                href={`/urunler/${stove.slug}`}
                className="focus-ring group flex w-[260px] shrink-0 flex-col rounded-panel border border-white/10 bg-navy-800/80 p-4 transition hover:border-ember-500/40 hover:bg-navy-800 md:w-auto"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-navy-900">
                  <ProductImage
                    src={stove.images[0]}
                    alt={`${stove.name} pelet sobası — Yalçın Isı`}
                    sizes="280px"
                    fit="cover"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 font-display text-lg font-bold">
                  {stove.name}
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-steel-400">
                  {stove.shortDescription}
                </p>
                <span className="mt-3 text-sm font-semibold text-ember-400 transition-transform group-hover:translate-x-0.5">
                  Ürünü İncele →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
