"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { formatTrNumber, yearsSince } from "@/lib/format";

const items = [
  {
    value: yearsSince(company.foundedYear),
    suffix: "+",
    label: "Yıllık deneyim",
  },
  {
    value: company.factory.totalAreaM2,
    suffix: " m²",
    label: "Kampüs alanı",
    format: true,
  },
  {
    value: company.factory.closedAreaM2,
    suffix: " m²",
    label: "Kapalı üretim",
    format: true,
  },
  {
    value: company.windPlant.powerKw,
    suffix: " kW",
    label: "RES gücü",
  },
] as const;

function StatValue({
  value,
  suffix,
  format,
}: {
  value: number;
  suffix: string;
  format?: boolean;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const dur = 1100;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const display = format ? formatTrNumber(n) : String(n);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-navy-900 py-16 text-white md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
            {items.map((item) => (
              <div key={item.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  <StatValue
                    value={item.value}
                    suffix={item.suffix}
                    format={"format" in item ? item.format : false}
                  />
                </div>
                <p className="mt-2 text-sm text-steel-300">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
