import Image from "next/image";
import {
  futureVisionParagraphs,
  futureVisionPillars,
} from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";

export function FutureVisionSection() {
  return (
    <section className="section-pad bg-navy-900 text-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
              Vizyon
            </p>
            <h2 className="mt-3 font-display text-display-lg text-white">
              Üretimden Geleceğe
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-panel">
              <Image
                src="/images/marketing/header-banner.jpg"
                alt="Yalçın Isı üretim vizyonu"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="space-y-5 text-base leading-relaxed text-steel-300 md:text-lg">
              {futureVisionParagraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {futureVisionPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-card border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-display text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-400">{pillar.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
