import type { Metadata } from "next";
import { getLocalService } from "@/data/seo";
import { LocalServicePage } from "@/components/seo/LocalServicePage";

const service = getLocalService("tokat-gunes-enerjisi")!;

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
    images: ["/images/marketing/gunes-enerjisi-banner.jpg"],
  },
};

export default function TokatGunesEnerjisiPage() {
  return <LocalServicePage service={service} />;
}
