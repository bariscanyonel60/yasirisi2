import Link from "next/link";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-hero bg-navy-900 px-8 py-14 text-center text-white md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 80%, rgba(242,140,0,0.35), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(61,86,168,0.5), transparent 45%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-grain opacity-40"
            aria-hidden
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
              Teklif
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-display-lg text-white">
              Projeniz İçin Doğru Çözümü Birlikte Belirleyelim.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-steel-300">
              Pelet sobası, güneş enerjisi, kangal boru veya sulama — keşif ve
              fiyat teklifi için Yalçın Isı ile iletişime geçin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/iletisim#teklif" className="btn-primary">
                Teklif Al
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light">
                Bize Ulaşın · {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
