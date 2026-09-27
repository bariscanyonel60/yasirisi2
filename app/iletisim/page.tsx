import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { site } from "@/data/site";
import { QuoteForm } from "@/components/products/QuoteForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yalçın Isı ile iletişime geçin: telefon, ofis, fabrika ve teklif formu. Tokat.",
  alternates: { canonical: "/iletisim" },
};

const mapsQuery = encodeURIComponent(site.officeAddress);
const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function IletisimPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            İletişim
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-300">
            Ürünlerimiz ve teklifleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            {site.name}
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-steel-400">Satış</dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1.5">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="focus-ring font-medium text-ember-600 hover:text-ember-500"
                  >
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-steel-400">Teknik Servis</dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1.5">
                {site.technicalService.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="focus-ring font-medium text-ember-600 hover:text-ember-500"
                  >
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-steel-400">E-posta</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring font-medium text-ember-600"
                >
                  {site.email}
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
            <div>
              <dt className="text-steel-400">Fabrika</dt>
              <dd className="font-medium text-ink">{site.factoryAddress}</dd>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-xl border border-steel-200 shadow-soft">
            <iframe
              title="Yalçın Isı ofis konumu"
              src={mapsEmbedSrc}
              className="aspect-video w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-ember-600 hover:text-ember-500"
          >
            Google Maps&apos;te aç →
          </a>
        </div>

        <div
          id="teklif"
          className="rounded-2xl border border-navy-900/10 bg-white p-8"
        >
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
          <p className="mt-4 text-xs text-steel-400">
            Acil talepler için{" "}
            <Link href={`https://wa.me/${site.whatsappNumber}`} className="text-ember-600">
              WhatsApp
            </Link>{" "}
            veya{" "}
            <a href={site.phoneHref} className="text-ember-600">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
