import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Belgelerimiz",
  description:
    "Yalçın Isı belge ve sertifikaları: TSE/TSEK, temiz enerji, çevre izni, Leonardo da Vinci eğitim ve verimlilik belgeleri.",
  alternates: { canonical: "/belgelerimiz" },
};

export default function BelgelerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
