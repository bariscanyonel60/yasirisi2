import Link from "next/link";

export function SolarElectricSection() {
  return (
    <section className="bg-paper py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-ember-600">Güneş enerjisi</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            Güneş paneliyle elektrik üretimi
          </h2>
          <p className="mt-5 text-steel-400 max-w-md text-lg">
            Fotovoltaik güneş paneli sistemleriyle konut, tarım ve tesis
            ihtiyaçlarınıza elektrik üretimi. Kolektör, depo ve sistem
            bileşenleriyle bütünleşik güneş enerji çözümleri sunuyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/urunler/gunes-paneli-elektrik-uretimi"
              className="focus-ring inline-flex items-center rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
            >
              PV Sistemleri
            </Link>
            <Link
              href="/urunler/kategori/gunes-enerji-sistemleri"
              className="focus-ring inline-flex items-center rounded-md border border-navy-900/15 px-6 py-3.5 text-sm font-semibold text-ink hover:border-ember-500 transition-colors"
            >
              Tüm Güneş Ürünleri
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-700 to-ember-600/50 border border-navy-900/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(239,124,0,0.4),transparent_55%)]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <div className="font-display text-4xl font-bold">PV</div>
            <p className="mt-2 max-w-xs text-sm text-steel-200">
              Güneş paneli elektrik üretimi — öz tüketim ve tarımsal enerji
              uygulamaları.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
