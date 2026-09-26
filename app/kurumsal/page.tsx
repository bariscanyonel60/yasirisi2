import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { FutureVisionSection } from "@/components/home/FutureVisionSection";
import { StoryTimeline } from "@/components/home/StoryTimeline";
import { WindEnergySection } from "@/components/home/WindEnergySection";
import { WhyUs } from "@/components/home/WhyUs";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Yalçın Isı'nın 1993'ten bu yana Tokat'ta süren üretim hikâyesi, aile şirketi değerleri, OKA destekli RES yatırımı ve üretim kapasitesi.",
  alternates: { canonical: "/kurumsal" },
};

export default function KurumsalPage() {
  return (
    <div>
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-medium text-ember-400 tracking-wide">
            Kurumsal
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Hakkımızda
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            {company.foundedYear} yılında {company.foundedAs} adıyla{" "}
            {company.startPlace}&apos;nde {company.startAreaM2} m²&apos;lik bir
            iş yerinde başlayan yolculuğumuz; bugün pelet, güneş, rüzgâr ve
            plastik üretiminde güçlü bir sanayi kuruluşuna dönüştü.
          </p>
        </div>
      </div>
      <AboutSection />
      <FutureVisionSection />
      <StoryTimeline />
      <WindEnergySection />
      <WhyUs />
    </div>
  );
}
