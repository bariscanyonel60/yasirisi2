import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/data/site";
import { QuoteForm } from "@/components/products/QuoteForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yalçın Isı ile iletişime geçin: telefon, adres ve teklif formu.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            İletişim
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            Ürünlerimiz ve teklifleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="container-page py-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            {site.name}
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-steel-400">Telefon</dt>
              <dd>
                <a href={site.phoneHref} className="focus-ring font-medium text-ember-600">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-steel-400">Web</dt>
              <dd className="font-medium text-ink">{site.domain}</dd>
            </div>
            <div>
              <dt className="text-steel-400">Instagram</dt>
              <dd>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring font-medium text-ember-600"
                >
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-steel-400">Ofis</dt>
              <dd className="font-medium text-ink">{site.officeAddress}</dd>
            </div>
          </dl>

          <div className="mt-8 aspect-video w-full rounded-xl bg-navy-900/5 flex items-center justify-center text-steel-400 text-sm">
            {/* TODO: Google Maps embed eklenecek (ofis adresi ile) */}
            Google Maps Görünümü
          </div>
        </div>

        <div id="teklif" className="rounded-2xl border border-navy-900/10 bg-white p-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            Teklif Formu
          </h2>
          <p className="mt-2 text-sm text-steel-400">
            Formu doldurun, en kısa sürede size dönüş yapalım.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
