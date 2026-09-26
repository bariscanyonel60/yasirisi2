import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { formatTrNumber, yearsSince } from "@/lib/format";

const capabilities = [
  {
    title: "Pelet Sobası Üretimi",
    text: "YPS serisi iç ve dış mekân pelet sobaları",
    href: "/urunler/kategori/pelet-sobalari",
  },
  {
    title: "Plastik Boru Üretimi",
    text: "PE kangal ve damlama sulama boruları",
    href: "/urunler/kategori/kangal-borular",
  },
  {
    title: "Güneş Enerjisi Sistemleri",
    text: "Panel, kolektör ve sistem bileşenleri",
    href: "/urunler/kategori/gunes-enerji-sistemleri",
  },
  {
    title: "Yenilenebilir Enerji",
    text: `${company.windPlant.powerKw} kW RES ve güneş yatırımları`,
    href: "/urunler/kategori/ruzgar-enerjisi",
  },
] as const;

const stats = [
  {
    value: `${yearsSince(company.foundedYear)}+`,
    label: "Yıl üretim deneyimi",
  },
  {
    value: `${formatTrNumber(company.factory.totalAreaM2)} m²`,
    label: "Toplam kampüs alanı",
  },
  {
    value: `${formatTrNumber(company.factory.closedAreaM2)} m²`,
    label: "Kapalı üretim alanı",
  },
  {
    value: `${company.windPlant.powerKw} kW`,
    label: "Fabrika RES gücü",
  },
] as const;

export function ProductionPower() {
  return (
    <section className="section-pad relative overflow-hidden bg-paper" id="uretim-gucu">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-60"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-hero bg-navy-900 shadow-lift md:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/marketing/header-banner-2.jpg"
                alt="Yalçın Isı üretim ve yenilenebilir enerji altyapısı"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-card bg-paper/95 p-4 backdrop-blur-sm md:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                  {company.factory.location}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-ink">
                  {formatTrNumber(company.factory.totalAreaM2)} m² üretim
                  kampüsü
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow">Üretim gücü</p>
            <h2 className="mt-3 font-display text-display-lg text-ink">
              Teknolojiyle Üretiyor,
              <br />
              Geleceğe Değer Katıyoruz.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-steel-500 md:text-lg">
              {company.foundedYear} yılında {company.startPlace}&apos;nde{" "}
              {company.startAreaM2} m² ile başlayan yolculuk; bugün Tokat
              Organize Sanayi Bölgesi&apos;nde entegre üretim kampüsüne
              dönüştü. Pelet, plastik boru ve yenilenebilir enerji aynı çatı
              altında.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-steel-500">{s.label}</dd>
                </div>
              ))}
            </dl>

            <Link href="/uretim" className="btn-primary mt-10">
              Üretim altyapısını incele
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 40}>
              <Link
                href={cap.href}
                className="focus-ring block rounded-card border border-steel-200 bg-mist p-5 transition hover:border-ember-500/40 hover:shadow-soft"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-steel-500">{cap.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
