import { site } from "@/data/site";
import { homeFaqs, localServices } from "@/data/seo";

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/logo.png`,
        email: site.email,
        sameAs: [site.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-544-261-92-05",
          contactType: "sales",
          areaServed: ["TR", "Tokat"],
          availableLanguage: "Turkish",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        image: `${site.url}/images/logo.png`,
        telephone: "+90-544-261-92-05",
        email: site.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Yeniyurt Mah. İsmail Altıngövde Cad. No:30",
          addressLocality: "Tokat",
          addressRegion: "Tokat",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          // Merkez Tokat yaklaşık; net koordinat eklendiğinde güncellenir
          latitude: 40.3235,
          longitude: 36.5522,
        },
        url: site.url,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Tokat",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Yalçın Isı ürünleri",
          itemListElement: localServices.map((s, i) => ({
            "@type": "OfferCatalog",
            name: s.h1,
            position: i + 1,
            url: `${site.url}${s.path}`,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "tr-TR",
      },
    ],
  };
}

export function buildHomeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceJsonLd(service: (typeof localServices)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: "Tokat",
    },
    url: `${site.url}${service.path}`,
  };
}

export function buildBlogArticleJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cover: string;
  seoDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.date,
    image: [`${site.url}${post.cover}`],
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    inLanguage: "tr-TR",
  };
}
