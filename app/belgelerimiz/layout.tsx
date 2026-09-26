import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Belgelerimiz",
  description:
    "Yalçın Isı üretim süreçlerine ve kalite standartlarına ilişkin belge ve sertifikalar.",
  alternates: { canonical: "/belgelerimiz" },
};

export default function BelgelerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
