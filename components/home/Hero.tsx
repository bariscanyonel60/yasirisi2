"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HeaderCarousel } from "@/components/layout/HeaderCarousel";
import { company } from "@/data/company";
import { formatTrNumber, yearsSince } from "@/lib/format";

const experienceYears = yearsSince(company.foundedYear);

const trustInline = [
  { label: `${experienceYears}+ Yıllık Tecrübe` },
  { label: "Yerli Üretim" },
  { label: "Türkiye Geneli Hizmet" },
] as const;

const floatingTrust = [
  {
    title: `${experienceYears}+ Yıllık Deneyim`,
    text: `${company.foundedYear}'ten beri Tokat'ta üretim`,
  },
  {
    title: "Modern Üretim",
    text: `${formatTrNumber(company.factory.closedAreaM2)} m² kapalı alan`,
  },
  {
    title: "Geniş Ürün Gamı",
    text: "Pelet, güneş, rüzgâr, kangal, sulama",
  },
  {
    title: "Satış Sonrası Destek",
    text: "Teknik bilgilendirme ve teklif",
  },
] as const;

export function Hero() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  return (
    <section className="relative -mt-16 bg-navy-900 md:-mt-[68px]">
      <div className="relative min-h-[650px] md:min-h-[720px] lg:min-h-[780px]">
        <HeaderCarousel overlay />

        <div className="relative z-[1] container-page flex min-h-[650px] flex-col justify-center py-20 md:min-h-[720px] md:py-24 lg:min-h-[780px]">
          <div className="max-w-[600px]">
            <p className="hero-rise hero-rise-d0 text-xs font-semibold uppercase tracking-[0.16em] text-ember-400">
              {company.incorporatedYear}&apos;den Beri Üretimin Gücü
            </p>

            <h1 className="hero-rise hero-rise-d1 mt-4 font-display text-display-xl text-white">
              Isıdan Enerjiye,
              <br />
              Üretimden Geleceğe.
            </h1>

            <p className="hero-rise hero-rise-d2 mt-5 max-w-lg text-base leading-relaxed text-steel-200 md:text-lg">
              Pelet sobası ve pelet yakıt, güneş paneli elektrik üretimi, rüzgâr
              enerjisi ile PE kangal boru — Tokat OSB&apos;de yerli üretim
              altyapısı.
            </p>

            <div className="hero-rise hero-rise-d3 mt-8 flex flex-wrap gap-3">
              <Link href="/urunler" className="btn-primary">
                Ürünleri Keşfet
              </Link>
              <Link href="/iletisim#teklif" className="btn-ghost-light">
                Teklif Al
              </Link>
            </div>

            <ul className="hero-rise hero-rise-d4 mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6">
              {trustInline.map((item) => (
                <li
                  key={item.label}
                  className="text-sm font-semibold text-white/85"
                >
                  <span className="mr-2 text-ember-400" aria-hidden>
                    ●
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-[2] container-page -mt-10 pb-2 md:-mt-14">
        <div className="grid gap-px overflow-hidden rounded-panel border border-steel-200/80 bg-steel-200/60 shadow-lift sm:grid-cols-2 lg:grid-cols-4">
          {floatingTrust.map((item, i) => (
            <div
              key={item.title}
              className={`hero-rise hero-rise-d${5 + i} bg-paper px-5 py-5 md:px-6 md:py-6`}
            >
              <div className="font-display text-base font-bold text-ink md:text-lg">
                {item.title}
              </div>
              <p className="mt-1 text-sm text-steel-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
