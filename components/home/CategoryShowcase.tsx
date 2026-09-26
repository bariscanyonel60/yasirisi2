import Image from "next/image";
import Link from "next/link";
import { energyCategories } from "@/data/categories";
import { hasKnownProductImage } from "@/components/products/ProductImage";

export function CategoryShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Enerji üretim gücümüz
          </h2>
          <p className="mt-4 text-steel-400 text-lg">
            Pelet yakıt ve pelet sobasından güneş paneli elektrik üretimine,
            rüzgâr enerjisine kadar yerli üretimle çözüm sunuyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy-900/10 md:grid-cols-2">
          {energyCategories.map((cat) => {
            const hasImage = hasKnownProductImage(cat.image);
            return (
              <Link
                key={cat.slug}
                href={`/urunler/kategori/${cat.slug}`}
                className="focus-ring group relative flex min-h-[340px] flex-col justify-end bg-navy-800 p-8 md:p-10 overflow-hidden"
              >
                {hasImage && (
                  <Image
                    src={cat.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-50 transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/45 to-transparent transition-opacity group-hover:opacity-95" />
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                    {cat.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-steel-300">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-ember-400">
                    Ürünleri İncele
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-steel-400">
          Ayrıca{" "}
          <Link
            href="/urunler/kategori/kangal-borular"
            className="font-medium text-ember-600 hover:text-ember-500"
          >
            PE kangal boru
          </Link>{" "}
          ve{" "}
          <Link
            href="/urunler/kategori/damlama-sulama-borulari"
            className="font-medium text-ember-600 hover:text-ember-500"
          >
            damlama sulama
          </Link>{" "}
          ürünlerimizi de inceleyebilirsiniz.
        </p>
      </div>
    </section>
  );
}
