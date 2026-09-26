import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

const categorySeo: Record<
  string,
  { title: string; keywords: string[] }
> = {
  "pelet-sobalari": {
    title: "Tokat Pelet Sobası | YPS Pelet Sobaları",
    keywords: ["tokat pelet soba", "tokat pelet sobası", "yps pelet sobası"],
  },
  "pelet-yakit": {
    title: "Tokat Pelet Yakıt",
    keywords: ["tokat pelet yakıt", "pelet yakıt tokat"],
  },
  "gunes-enerji-sistemleri": {
    title: "Tokat Güneş Enerjisi | Panel ve Kolektör",
    keywords: ["tokat güneş enerjisi", "tokat güneş paneli"],
  },
  "ruzgar-enerjisi": {
    title: "Tokat Rüzgâr Enerjisi",
    keywords: ["tokat rüzgâr enerjisi", "rüzgâr gülü tokat"],
  },
  "kangal-borular": {
    title: "Tokat Kangal Boru | PE Kangal",
    keywords: ["tokat kangal boru", "tokat pe kangal boru"],
  },
  "damlama-sulama-borulari": {
    title: "Tokat Damlama Sulama Boruları",
    keywords: ["tokat damlama sulama", "damlama sulama borusu tokat"],
  },
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  const seo = categorySeo[category.slug];
  return {
    title: seo?.title ?? category.name,
    description: category.description,
    keywords: seo?.keywords,
    alternates: { canonical: `/urunler/kategori/${category.slug}` },
    openGraph: {
      title: seo?.title ?? category.name,
      description: category.description,
      url: `/urunler/kategori/${category.slug}`,
      images: [category.image],
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div className="bg-paper">
      <div className="container-page py-20">
        <nav className="text-sm text-steel-400">
          <span>Ürünler</span> <span className="mx-1">/</span>{" "}
          <span className="text-ink">{category.name}</span>
        </nav>

        <h1 className="mt-4 font-display text-4xl font-bold text-ink">
          {categorySeo[category.slug]?.title?.split("|")[0]?.trim() ??
            category.name}
        </h1>
        <p className="mt-3 max-w-xl text-steel-400 text-lg">
          {category.description}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
