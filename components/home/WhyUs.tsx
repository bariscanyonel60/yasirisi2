import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Yerli Üretim",
    text: "Tokat OSB'de pelet sobası, pelet yakıt ve plastik boru üretimi.",
  },
  {
    title: "Köklü Deneyim",
    text: "1993'ten bu yana aile şirketi disipliniyle sürekli büyüme.",
  },
  {
    title: "Teknik Destek",
    text: "Ürün seçimi, keşif ve satış sonrası bilgilendirme.",
  },
  {
    title: "Geniş Ürün Yelpazesi",
    text: "Isıtma, güneş, rüzgâr, kangal boru ve sulama çözümleri.",
  },
  {
    title: "Kalite Standartları",
    text: "TSE/TSEK süreci, proje deneyimi ve belge portföyü.",
  },
  {
    title: "Sürdürülebilir Üretim",
    text: "Kendi RES yatırımı ve yenilenebilir enerji odaklı yaklaşım.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Neden biz?</p>
          <h2 className="mt-3 max-w-xl font-display text-display-lg text-ink">
            Neden Yalçın Isı?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 40}>
              <article className="h-full rounded-card border border-steel-200 bg-mist p-6 transition hover:border-navy-800/20 hover:shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-ember-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">
                  {r.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
