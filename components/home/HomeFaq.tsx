import { homeFaqs } from "@/data/seo";
import { Reveal } from "@/components/ui/Reveal";

export function HomeFaq() {
  return (
    <section className="section-pad bg-mist" aria-labelledby="sss-baslik">
      <div className="container-page max-w-[900px]">
        <Reveal>
          <p className="eyebrow">Sık sorulanlar</p>
          <h2
            id="sss-baslik"
            className="mt-3 font-display text-display-lg text-ink"
          >
            Merak Ettikleriniz
          </h2>
          <p className="mt-3 text-steel-500">
            Tokat pelet sobası, güneş enerjisi ve kangal boru hakkında sık
            sorulan sorular.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-steel-200 rounded-panel border border-steel-200 bg-paper px-5 md:px-8">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:content-none md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-600 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-steel-500 md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
