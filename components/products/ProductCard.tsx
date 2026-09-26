import Link from "next/link";
import { Product } from "@/types/product";
import { ProductImage } from "@/components/products/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="focus-ring group rounded-xl border border-navy-900/10 bg-white overflow-hidden hover:border-ember-500/40 transition-colors"
    >
      <div className="relative aspect-[4/3] bg-navy-900/5 overflow-hidden">
        <ProductImage
          src={image}
          alt={`${product.name} ürün görseli`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink group-hover:text-ember-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-steel-400 line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
