import type { Metadata } from "next";
import { ProductionSection } from "@/components/home/ProductionSection";
import { company } from "@/data/company";
import { formatTrNumber } from "@/lib/format";

export const metadata: Metadata = {
  title: "Üretim",
  description:
    "Yalçın Isı üretim altyapısı: Tokat OSB'de 15.000 m² kampüs, pelet, plastik boru, geri dönüşüm, enjeksiyon ve toz boya.",
  alternates: { canonical: "/uretim" },
};

export default function UretimPage() {
  return (
    <div>
      <div className="bg-navy-800 py-20 text-white">
        <div className="container-page">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Üretim
          </h1>
          <p className="mt-4 max-w-2xl text-steel-300 text-lg">
            {company.factory.location}&apos;nde{" "}
            {formatTrNumber(company.factory.totalAreaM2)} m² alan üzerinde{" "}
            {formatTrNumber(company.factory.closedAreaM2)} m² kapalı üretim
            alanı; pelet, güneş sistemleri, plastik boru ve ilgili sanayi
            üretimleri.
          </p>
        </div>
      </div>
      <ProductionSection />
    </div>
  );
}
