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
      <div className="relative min-h-[min(92svh,640px)] md:min-h-[680px] lg:min-h-[760px]">
        <HeaderCarousel overlay />

        <div className="relative z-[1] container-page flex min-h-[min(92svh,640px)] flex-col justify-center py-16 md:min-h-[680px] md:py-20 lg:min-h-[760px] lg:py-24">
          <div className="max-w-[640px]">
            <p className="hero-rise hero-rise-d0 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember-400 sm:text-xs">
              Yalçın Isı · Tokat · {company.incorporatedYear}&apos;den beri
            </p>

            <h1 className="hero-rise hero-rise-d1 mt-3 font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:text-display-xl md:mt-4">
              Tokat Pelet Sobası,
              <br className="sm:hidden" />{" "}
              Güneş Enerjisi ve Kangal Boru
            </h1>

            <p className="hero-rise hero-rise-d2 mt-3 font-display text-lg font-semibold text-white/90 sm:mt-4 sm:text-xl md:text-2xl">
              Isıdan enerjiye, üretimden geleceğe.
            </p>

            <p className="hero-rise hero-rise-d2 mt-4 max-w-lg text-[15px] leading-relaxed text-steel-200 sm:text-base md:text-lg">
              Pelet sobası ve pelet yakıt, güneş paneli elektrik üretimi, rüzgâr
              enerjisi ile PE kangal boru — Tokat OSB&apos;de yerli üretim
              altyapısı.
            </p>

            <div className="hero-rise hero-rise-d3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/urunler" className="btn-primary w-full sm:w-auto">
                Ürünleri Keşfet
              </Link>
              <Link
                href="/iletisim#teklif"
                className="btn-ghost-light w-full sm:w-auto"
              >
                Teklif Al
              </Link>
            </div>

            <ul className="hero-rise hero-rise-d4 mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 sm:mt-10 sm:gap-x-6 sm:pt-6">
              {trustInline.map((item) => (
                <li
                  key={item.label}
                  className="text-xs font-semibold text-white/85 sm:text-sm"
                >
                  <span className="mr-2 text-ember-400" aria-hidden>
                    ·
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-[2] container-page -mt-8 pb-2 sm:-mt-10 md:-mt-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-steel-200/80 bg-steel-200/60 shadow-lift lg:grid-cols-4">
          {floatingTrust.map((item, i) => (
            <div
              key={item.title}
              className={`hero-rise hero-rise-d${5 + i} bg-paper px-3.5 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6`}
            >
              <div className="font-display text-sm font-bold text-ink sm:text-base md:text-lg">
                {item.title}
              </div>
              <p className="mt-1 text-xs text-steel-500 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
