import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allProducts,
  getProductBySlug,
  getProductsByCategory,
  pelletFeatures,
  pelletPerformanceFeatures,
  whatsappHref,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { site } from "@/data/site";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductImage } from "@/components/products/ProductImage";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: { absolute: product.seoTitle },
    description: product.seoDescription,
    alternates: { canonical: `/urunler/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images,
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const specs = product.technicalSpecs.filter(
    (s) => s.value && s.value !== "TODO"
  );
  const usageAreas = product.usageAreas?.filter((a) => a && a !== "TODO");
  const documents = product.documents?.filter(
    (d) => d.href && d.href !== "#"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => `${site.url}${i}`),
    brand: { "@type": "Brand", name: site.name },
    url: `${site.url}/urunler/${product.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ürünler", item: `${site.url}/urunler` },
      category && {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${site.url}/urunler/kategori/${category.slug}`,
      },
      { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/urunler/${product.slug}` },
    ].filter(Boolean),
  };

  return (
    <div className="bg-paper">
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd} />

      <div className="container-page py-10 sm:py-14 md:py-16">
        <nav className="text-sm text-steel-400" aria-label="Breadcrumb">
          <Link href="/urunler" className="hover:text-ink">Ürünler</Link>
          {category && (
            <>
              <span className="mx-1">/</span>
              <Link href={`/urunler/kategori/${category.slug}`} className="hover:text-ink">
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-1">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-8 sm:mt-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900/5">
              <ProductImage
                src={product.images[0]}
                alt={`${product.name} ürün görseli`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                fit="contain"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.slice(1).map((img, i) => (
                  <div
                    key={img}
                    className="relative aspect-square rounded-lg bg-navy-900/5 overflow-hidden"
                  >
                    <ProductImage
                      src={img}
                      alt={`${product.name} görsel ${i + 2}`}
                      sizes="160px"
                      fit={product.imageFit}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {category && (
              <p className="eyebrow">{category.name}</p>
            )}
            <h1 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-steel-500 leading-relaxed">
              {product.description}
            </p>

            {product.category === "pelet-sobalari" && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {(product.slug.includes("yps-03") ||
                product.slug.includes("yps-04")
                  ? pelletPerformanceFeatures
                  : pelletFeatures
                ).map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-navy-700"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/iletisim?urun=${encodeURIComponent(product.name)}#teklif`}
                className="btn-primary w-full sm:w-auto"
              >
                Teklif İste
              </Link>
              <a
                href={whatsappHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-whatsapp-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-600 sm:w-auto"
              >
                WhatsApp&apos;tan Bilgi Al
              </a>
              <a
                href={site.phoneHref}
                className="btn-secondary w-full sm:w-auto"
              >
                {site.phoneDisplay}
              </a>
            </div>

            {specs.length > 0 && (
              <div className="mt-10 border-t border-navy-900/10 pt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Teknik Özellikler
                </h2>
                <dl className="mt-4 divide-y divide-navy-900/10">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-0.5 py-3 text-sm sm:flex-row sm:justify-between sm:gap-6"
                    >
                      <dt className="text-steel-400">{spec.label}</dt>
                      <dd className="font-medium text-ink sm:text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {usageAreas && usageAreas.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Kullanım Alanları
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {usageAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-navy-900/5 px-3 py-1 text-sm text-steel-500"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {documents && documents.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Dokümanlar
                </h2>
                <ul className="mt-3 space-y-2">
                  {documents.map((doc) => (
                    <li key={doc.label}>
                      <a
                        href={doc.href}
                        className="focus-ring text-sm font-medium text-ember-600 hover:text-ember-500"
                      >
                        {doc.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="font-display text-2xl font-bold text-ink">
              Benzer Ürünler
            </h2>
            <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
