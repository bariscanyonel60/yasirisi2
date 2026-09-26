import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Yalçın Isı'nın KOSGEB, AB, OKA ve rüzgâr enerjisi yatırımları dahil proje çalışmaları.",
  alternates: { canonical: "/projeler" },
};

const projects = [
  {
    title: "OKA destekli rüzgâr enerjisi santrali",
    summary:
      "Tokat'ta lisanssız rüzgâr enerji santrali yatırımı — 100 kW kurulu güç ile öz tüketim.",
    href: "/urunler/ruzgar-enerjisi-santrali",
  },
  {
    title: "KOSGEB üretim teknolojileri",
    summary:
      "Üretim altyapısının geliştirilmesine yönelik KOSGEB destekli süreçler.",
  },
  {
    title: "AB / Leonardo da Vinci",
    summary:
      "Avrupa Birliği destekli proje ve bilgi paylaşım süreçlerine katılım.",
  },
];

export default function ProjelerPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Projeler
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            KOSGEB, Avrupa Birliği, OKA ve Leonardo da Vinci gibi destek
            süreçleriyle yürütülen proje çalışmalarımız.
          </p>
        </div>
      </div>

      <div className="container-page py-16">
        <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
          {projects.map((p) => (
            <li key={p.title} className="py-8">
              <h2 className="font-display text-xl font-bold text-ink">
                {p.title}
              </h2>
              <p className="mt-2 max-w-2xl text-steel-400">{p.summary}</p>
              {"href" in p && p.href ? (
                <Link
                  href={p.href}
                  className="focus-ring mt-3 inline-flex text-sm font-medium text-ember-600 hover:text-ember-500"
                >
                  Detayı gör
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
