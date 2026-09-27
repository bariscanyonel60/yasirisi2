import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "2026 Ürün Kataloğu (PDF)",
  description:
    "Yalçın Isı 2026 ürün kataloğu: pelet sobası, çam pelet, güneş enerji sistemleri, PE kangal boru, damlama sulama, kaplin ve elektrik panoları. PDF indir.",
  alternates: { canonical: "/katalog" },
  openGraph: {
    title: "Yalçın Isı 2026 Ürün Kataloğu",
    description:
      "Pelet sobası, güneş enerjisi, kangal boru, sulama ekipmanları ve elektrik panoları — PDF katalog.",
    url: "/katalog",
    images: ["/images/marketing/katalog-kapak.jpg"],
  },
};

const highlights = [
  "YPS-01 … YPS-10 pelet sobaları",
  "Çam pelet üretimi",
  "3 / 6,2 / 11 kW güneş enerji sistemleri",
  "2 kolektörlü ve 18–36 vakum tüplü sistemler",
  "6 ve 10 ATÜ kangal boru ağırlık tabloları",
  "Kaplin, mandallı boru ve sulama ekipmanları",
  "Sayaçlı ve şantiye elektrik panoları",
] as const;

export default function KatalogPage() {
  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Merhaba, Yalçın Isı 2026 ürün kataloğu hakkında bilgi almak istiyorum."
  )}`;

  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-12 text-white sm:py-16 md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            2026 · 36 sayfa
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Ürün Kataloğu
          </h1>
          <p className="mt-4 max-w-2xl text-base text-steel-300 sm:text-lg">
            Isı sistemleri, enerji ve endüstriyel çözümlerimizin tamamı tek
            dosyada. İndirin, inceleyin, teklif isteyin.
          </p>
        </div>
      </div>

      <div className="container-page py-12 sm:py-16">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <a
            href={site.catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group relative mx-auto block aspect-[595/842] w-full max-w-sm overflow-hidden rounded-2xl bg-navy-900 shadow-lift md:max-w-none"
          >
            <Image
              src="/images/marketing/katalog-kapak.jpg"
              alt="Yalçın Isı 2026 ürün kataloğu kapağı"
              fill
              sizes="(max-width:768px) 90vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </a>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Katalogda neler var?
            </h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-steel-600">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"
                    aria-hidden
                  />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.catalogPdf}
                download
                className="btn-primary w-full sm:w-auto"
              >
                PDF İndir (8,7 MB)
              </a>
              <a
                href={site.catalogPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Tarayıcıda Aç
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                WhatsApp&apos;tan Sor
              </a>
            </div>

            <h3 className="mt-10 font-display text-lg font-bold text-ink">
              Ürün gruplarına git
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/urunler/kategori/${c.slug}`}
                    className="focus-ring inline-flex min-h-[40px] items-center rounded-full border border-steel-200 bg-mist px-4 text-sm font-medium text-ink hover:border-ember-500 hover:text-ember-600"
                  >
                    {c.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-steel-200 shadow-soft md:block">
          <object
            data={`${site.catalogPdf}#view=FitH`}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Yalçın Isı 2026 ürün kataloğu"
          >
            <p className="p-6 text-sm text-steel-500">
              Tarayıcınız PDF önizlemeyi desteklemiyor.{" "}
              <a href={site.catalogPdf} className="text-ember-600">
                Kataloğu indirin
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}
