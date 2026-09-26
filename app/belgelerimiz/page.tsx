"use client";

import Image from "next/image";
import { useState } from "react";
import { certificates, certificatesCollage } from "@/data/company";

export default function BelgelerimizPage() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="bg-paper">
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Belgelerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            Temiz enerji, çevre izni, eğitim ve verimlilik alanındaki belge ve
            sertifikalarımız.
          </p>
        </div>
      </div>

      <div className="container-page py-16">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="focus-ring group relative w-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10]">
            <Image
              src={certificatesCollage}
              alt="Yalçın Isı belge ve sertifikaları"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-contain bg-steel-200/40 p-2 transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>
          <span className="absolute bottom-4 right-4 rounded-md bg-navy-800/90 px-4 py-2 text-sm font-medium text-white">
            Büyüt
          </span>
        </button>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <li
              key={cert.title}
              className="rounded-xl border border-navy-900/10 bg-white p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-ember-600">
                {cert.year}
              </div>
              <h2 className="mt-2 font-display text-base font-bold text-ink">
                {cert.title}
              </h2>
              <p className="mt-1 text-sm text-steel-400">{cert.note}</p>
            </li>
          ))}
        </ul>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sertifika görseli"
        >
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
            onClick={() => setLightbox(false)}
          >
            Kapat
          </button>
          <div
            className="relative h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certificatesCollage}
              alt="Yalçın Isı belge ve sertifikaları — büyük görünüm"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
