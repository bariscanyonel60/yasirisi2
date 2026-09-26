import { aboutParagraphs, company } from "@/data/company";
import { formatTrNumber } from "@/lib/format";

export function AboutSection() {
  return (
    <section className="bg-paper py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-ember-600 tracking-wide">
            Hakkımızda
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">
            1993&apos;ten bu yana Tokat&apos;ta üretim
          </h2>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-steel-400">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: `${company.foundedYear}`,
              label: "Kuruluş",
            },
            {
              value: `${formatTrNumber(company.factory.totalAreaM2)} m²`,
              label: "Toplam alan",
            },
            {
              value: `${formatTrNumber(company.factory.closedAreaM2)} m²`,
              label: "Kapalı üretim",
            },
            {
              value: `${company.windPlant.powerKw} kW`,
              label: "RES kurulu güç",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-navy-900/10 bg-white px-5 py-6"
            >
              <div className="font-display text-2xl font-bold text-navy-700">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-steel-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-ink">
            Faaliyet alanlarımız
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {company.activityAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-navy-700/20 bg-navy-700/5 px-4 py-2 text-sm font-medium text-navy-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
