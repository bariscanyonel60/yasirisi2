import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { allProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Yalçın Isı ürün grupları: pelet sobası, pelet yakıt, güneş paneli elektrik üretimi, rüzgâr enerjisi ve tarımsal sulama.",
  alternates: { canonical: "/urunler" },
};

export default function ProductsPage() {
  return (
    <div className="bg-paper">
      <div className="container-page py-20">
        <h1 className="font-display text-4xl font-bold text-ink">Ürünler</h1>
        <p className="mt-3 max-w-xl text-steel-400 text-lg">
          Pelet, güneş ve rüzgâr enerjisi ile tarımsal sulama — yerli üretim
          ürün gamımız.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/urunler/kategori/${c.slug}`}
              className="focus-ring rounded-full border border-navy-900/15 px-4 py-2 text-sm font-medium text-ink hover:border-ember-500 hover:text-ember-600 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
