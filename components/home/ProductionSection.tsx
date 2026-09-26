import { company } from "@/data/company";
import { formatTrNumber } from "@/lib/format";

const points = [
  {
    label: "Üretim kampüsü",
    text: `${company.factory.location}'nde ${formatTrNumber(company.factory.totalAreaM2)} m² alan, ${formatTrNumber(company.factory.closedAreaM2)} m² kapalı üretim.`,
  },
  {
    label: "Yeni fabrika",
    text: `${formatTrNumber(company.factory.newBuildingM2)} m² yeni fabrika binası inşaatı sürüyor.`,
  },
  {
    label: "Kangal boru",
    text: "Günlük 2.000 kg plastik kangal boru üretim kapasitesi.",
  },
  {
    label: "Çam pelet",
    text: "Çam pelet üretim tesisi ile pelet yakıt üretimi.",
  },
  {
    label: "Ultrasonik kaynak",
    text: "Ultrasonik kaynak teknolojisini Tokat'ta uygulayan ilk firmalardan biri.",
  },
  {
    label: "Toz boya & enjeksiyon",
    text: "Elektrostatik toz boya ünitesi ve plastik enjeksiyon sistemleri.",
  },
];

export function ProductionSection() {
  return (
    <section className="bg-paper py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Tecrübe üretime dönüşüyor.
          </h2>
          <p className="mt-4 text-steel-400 text-lg">
            Plastik geri dönüşüm, pelet, kangal boru, enjeksiyon ve toz boya —
            tek kampüste entegre üretim.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              value: `${formatTrNumber(company.factory.totalAreaM2)} m²`,
              label: "Toplam alan",
            },
            {
              value: `${formatTrNumber(company.factory.closedAreaM2)} m²`,
              label: "Kapalı alan",
            },
            {
              value: `${formatTrNumber(company.factory.newBuildingM2)} m²`,
              label: "Yeni bina (inşaat)",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-navy-900/10 bg-mist px-5 py-6"
            >
              <div className="font-display text-2xl font-bold text-navy-700">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-steel-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-navy-900/10 bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {p.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
