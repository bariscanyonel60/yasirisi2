import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { hasKnownProductImage } from "@/components/products/ProductImage";
import { formatTrDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Yalçın Isı blog: Tokat pelet sobası, güneş enerjisi, kangal boru ve üretim yazıları.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-paper">
      <div className="bg-navy-900 py-16 text-white md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
            Kurumsal
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-steel-300">
            Pelet sobası, güneş enerjisi ve sulama hakkında bilgilendirici
            yazılar.
          </p>
        </div>
      </div>

      <div className="container-page section-pad">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                  {post.category} · {formatTrDate(post.date)}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-ink">
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
                  className="mt-4 text-sm font-semibold text-ember-600 hover:text-ember-500"
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
