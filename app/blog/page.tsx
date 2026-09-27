import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { hasKnownProductImage } from "@/components/products/ProductImage";
import { formatTrDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog | Tokat Pelet, Güneş ve Sulama Rehberleri",
  description:
    "Yalçın Isı blog: Tokat pelet sobası, pelet yakıt, güneş enerjisi, kangal boru ve damlama sulama rehber yazıları.",
  keywords: [
    "tokat pelet soba",
    "tokat güneş enerjisi",
    "tokat kangal boru",
    "tokat damlama sulama",
    "yalçın ısı blog",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Yalçın Isı",
    description:
      "Tokat pelet sobası, güneş enerjisi ve kangal boru hakkında bilgilendirici yazılar.",
    url: "/blog",
    locale: "tr_TR",
    type: "website",
  },
};

const sortedPosts = [...blogPosts].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export default function BlogPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-900 py-12 text-white sm:py-16 md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            Kurumsal · SEO rehberleri
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel-300 sm:text-base">
            Tokat pelet sobası, güneş enerjisi, PE kangal boru ve damlama sulama
            için seçim rehberleri — yerel arama niyetine göre yazıldı.
          </p>
        </div>
      </div>

      <div className="container-page section-pad">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-panel border border-steel-200 bg-mist shadow-soft"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="focus-ring relative aspect-[16/10] overflow-hidden bg-navy-900"
              >
                {hasKnownProductImage(post.cover) && (
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                  {post.category} · {formatTrDate(post.date)}
                </p>
                <h2 className="mt-2 font-display text-lg font-bold text-ink sm:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="focus-ring hover:text-ember-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-500">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-ember-600 hover:text-ember-500"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
