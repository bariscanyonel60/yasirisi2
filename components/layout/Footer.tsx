import Link from "next/link";
import {
  site,
  corporateLinks,
  footerExtraLinks,
} from "@/data/site";
import { categories } from "@/data/categories";
import { localServices } from "@/data/seo";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { MediaCredit } from "@/components/layout/MediaCredit";

export function Footer() {
  const seen = new Set<string>();
  const kurumsalLinks = [
    ...corporateLinks,
    ...footerExtraLinks,
  ].filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-steel-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo variant="white" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.description}
          </p>
          <div className="mt-6 space-y-1 text-sm">
            {localServices.map((s) => (
              <div key={s.slug}>
                <Link
                  href={s.path}
                  className="focus-ring hover:text-white transition-colors"
                >
                  {s.h1}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Ürünler</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/urunler/kategori/${c.slug}`}
                  className="focus-ring hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Kurumsal</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {kurumsalLinks.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  className="focus-ring hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/katalog"
                className="focus-ring hover:text-white transition-colors"
              >
                Katalog
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                className="focus-ring hover:text-white transition-colors"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">İletişim</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="focus-ring font-medium text-white hover:text-ember-400 transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.officeAddress}</li>
            <li>{site.factoryAddress}</li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hover:text-white transition-colors"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-steel-400 md:flex-row">
          <span>
            © 2026 {site.name}. Tüm hakları saklıdır.
          </span>
          <MediaCredit tone="dark" className="text-xs md:text-[13px]" />
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/gizlilik-politikasi"
              className="focus-ring hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kvkk"
              className="focus-ring hover:text-white transition-colors"
            >
              KVKK
            </Link>
            <Link
              href="/cerez-politikasi"
              className="focus-ring hover:text-white transition-colors"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
