import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProductGroups } from "@/components/home/ProductGroups";
import { ProductionPower } from "@/components/home/ProductionPower";
import { PelletShowcase } from "@/components/home/PelletShowcase";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { FutureVisionSection } from "@/components/home/FutureVisionSection";
import { StoryTimeline } from "@/components/home/StoryTimeline";
import { CertificatesStrip } from "@/components/home/CertificatesStrip";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyUs } from "@/components/home/WhyUs";
import { HomeFaq } from "@/components/home/HomeFaq";
import { LocalSeoSections } from "@/components/home/LocalSeoSections";
import { ContactCTA } from "@/components/home/ContactCTA";
import { WindEnergySection } from "@/components/home/WindEnergySection";
import { homeSeo } from "@/data/seo";
import { buildHomeFaqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  keywords: [...homeSeo.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: "/",
    locale: "tr_TR",
    type: "website",
    images: ["/images/marketing/header-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: ["/images/marketing/header-banner.jpg"],
  },
};

export default function HomePage() {
  const faqLd = buildHomeFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Hero />
      <ProductGroups />
      <ProductionPower />
      <PelletShowcase />
      <FeaturedProduct />
      <FutureVisionSection />
      <StoryTimeline />
      <CertificatesStrip />
      <StatsSection />
      <WhyUs />
      <WindEnergySection />
      <HomeFaq />
      <LocalSeoSections />
      <ContactCTA />
    </>
  );
}
