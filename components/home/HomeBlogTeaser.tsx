import Image from "next/image";
import Link from "next/link";
import { getLatestBlogPosts } from "@/data/blog";
import { hasKnownProductImage } from "@/components/products/ProductImage";
import { formatTrDate } from "@/lib/format";
import { Reveal } from "@/components/ui/Reveal";

/** One-page SEO: blog hub — yerel anahtar kelime yazılarına iç link */
export function HomeBlogTeaser() {
  const posts = getLatestBlogPosts(3);

  return (
    <section
      className="section-pad bg-paper"
      aria-labelledby="blog-teaser-baslik"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Blog · Rehberler</p>
              <h2
                id="blog-teaser-baslik"
                className="mt-3 font-display text-display-lg text-ink"
              >
                Tokat pelet, güneş ve sulama yazıları
              </h2>
              <p className="mt-3 max-w-xl text-base text-steel-500 md:text-lg">
                Yerel arama niyetine göre seçim rehberleri — pelet sobası, güneş
                enerjisi, kangal ve damlama.
              </p>
            </div>
            <Link
              href="/blog"
              className="focus-ring shrink-0 text-sm font-semibold text-ember-600 hover:text-ember-500"
            >
              Tüm yazılar →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-panel border border-steel-200 bg-mist shadow-soft">
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
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                    {post.category} · {formatTrDate(post.date)}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink md:text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus-ring hover:text-ember-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
