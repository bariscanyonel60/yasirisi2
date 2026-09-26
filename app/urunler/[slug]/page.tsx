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
    title: product.seoTitle,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="container-page py-16">
        <nav className="text-sm text-steel-400">
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

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[3/4] sm:aspect-[4/3] rounded-2xl bg-navy-900/5 overflow-hidden">
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
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center rounded-md bg-whatsapp-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-whatsapp-600 transition-colors"
              >
                WhatsApp'tan Bilgi Al
              </a>
              <Link
                href={`/iletisim?urun=${encodeURIComponent(product.name)}#teklif`}
                className="focus-ring inline-flex items-center rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
              >
                Teklif İste
              </Link>
            </div>

            <div className="mt-10 border-t border-navy-900/10 pt-8">
              <h2 className="font-display text-lg font-bold text-ink">
                Teknik Özellikler
              </h2>
              <dl className="mt-4 divide-y divide-navy-900/10">
                {product.technicalSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between gap-6 py-3 text-sm"
                  >
                    <dt className="text-steel-400">{spec.label}</dt>
                    <dd className="text-right font-medium text-ink">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {product.usageAreas && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Kullanım Alanları
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.usageAreas.map((area) => (
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

            {product.documents && product.documents.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Dokümanlar
                </h2>
                <ul className="mt-3 space-y-2">
                  {product.documents.map((doc) => (
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
          <div className="mt-24">
            <h2 className="font-display text-2xl font-bold text-ink">
              Benzer Ürünler
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
