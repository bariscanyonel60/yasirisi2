import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog",
  description: "Yalçın Isı 2026 ürün kataloğunu inceleyin veya indirin.",
  alternates: { canonical: "/katalog" },
};

export default function KatalogPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Katalog
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            Tüm ürün ailelerimizi ve teknik özelliklerini içeren güncel
            kataloğumuza buradan ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="aspect-[3/4] rounded-2xl bg-navy-900/5 flex items-center justify-center text-steel-400 text-sm">
            {/* TODO: katalog kapak görseli / mockup eklenecek */}
            Katalog Kapağı
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              2026 Ürün Kataloğunu İnceleyin
            </h2>
            <p className="mt-3 text-steel-400">
              Katalog PDF'i eklendiğinde bu alandan tarayıcı üzerinde
              görüntülenebilecek veya indirilebilecektir.
            </p>
            {/* TODO: gerçek katalog PDF dosyası eklenince href güncellenecek */}
            <a
              href="#"
              className="focus-ring mt-6 inline-flex items-center rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
            >
              2026 Ürün Kataloğunu İncele
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
