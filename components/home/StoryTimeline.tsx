"use client";

import { milestones } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";

export function StoryTimeline() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Tarihçe</p>
          <h2 className="mt-3 max-w-xl font-display text-display-lg text-ink">
            Otuz yılı aşan bir üretim hikâyesi
          </h2>
          <p className="mt-4 max-w-lg text-steel-500">
            50 m²&apos;lik bir iş yerinden Tokat Organize Sanayi Bölgesi&apos;ndeki
            üretim kampüsüne.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-ember-500 via-navy-800/30 to-navy-800/10 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-14">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={`${m.year}-${m.title}`} className="relative">
                  <Reveal delay={i * 40}>
                    <div
                      className={`md:grid md:grid-cols-2 md:gap-10 ${
                        left ? "" : "md:[&>*:first-child]:col-start-2"
                      }`}
                    >
                      <div
                        className={`relative pl-12 md:pl-0 ${
                          left ? "md:pr-12 md:text-right" : "md:pl-12"
                        }`}
                      >
                        <span
                          className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-ember-500 bg-paper md:left-1/2 md:-ml-1.5 md:hidden"
                          aria-hidden
                        />
                        <div className="font-display text-3xl font-bold text-ember-500 md:text-4xl">
                          {m.year}
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold text-ink">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-steel-500 md:text-base">
                          {m.text}
                        </p>
                      </div>
                    </div>
                    <span
                      className="absolute left-1/2 top-3 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-ember-500 bg-paper md:block"
                      aria-hidden
                    />
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
