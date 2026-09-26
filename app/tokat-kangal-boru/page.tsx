import type { Metadata } from "next";
import { getLocalService } from "@/data/seo";
import { LocalServicePage } from "@/components/seo/LocalServicePage";

const service = getLocalService("tokat-kangal-boru")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  keywords: [...service.keywords],
  alternates: { canonical: service.path },
  openGraph: {
    title: service.title,
    description: service.description,
    url: service.path,
    locale: "tr_TR",
    type: "website",
    images: ["/images/marketing/header-banner.jpg"],
  },
};

export default function TokatKangalBoruPage() {
  return <LocalServicePage service={service} />;
}
