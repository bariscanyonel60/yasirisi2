import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getAllBlogSlugs,
  getBlogPost,
} from "@/data/blog";
import { hasKnownProductImage } from "@/components/products/ProductImage";
import { formatTrDate } from "@/lib/format";
import { buildBlogArticleJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [post.cover],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.cover],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const others = [...blogPosts]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  const articleLd = buildBlogArticleJsonLd(post);

  return (
    <article className="bg-paper">
      <JsonLd data={articleLd} />
      <header className="bg-navy-900 py-12 text-white sm:py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <nav className="text-sm text-steel-400" aria-label="Breadcrumb">
            <Link href="/blog" className="focus-ring hover:text-white">
              Blog
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-steel-300">{post.category}</span>
          </nav>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ember-400 sm:mt-6">
            {post.category} · {formatTrDate(post.date)}
          </p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-steel-300 sm:text-lg">{post.excerpt}</p>
        </div>
      </header>

      {hasKnownProductImage(post.cover) && (
        <div className="container-page -mt-6 max-w-3xl sm:-mt-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-panel shadow-lift">
            <Image
              src={post.cover}
              alt=""
              fill
              priority
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="container-page max-w-3xl py-10 sm:py-12 md:py-16">
        <div className="space-y-5 text-[15px] leading-relaxed text-steel-500 sm:text-base md:text-lg">
          {post.content.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>

        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <nav
            className="mt-10 rounded-panel border border-steel-200 bg-mist p-5 sm:p-6"
            aria-label="İlgili sayfalar"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
              İlgili sayfalar
            </p>
            <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {post.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm font-semibold text-navy-800 hover:text-ember-600"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-10 flex flex-col gap-3 border-t border-steel-200 pt-8 sm:mt-12 sm:flex-row sm:flex-wrap">
          <Link href="/iletisim#teklif" className="btn-primary w-full sm:w-auto">
            Teklif Al
          </Link>
          <Link href="/blog" className="btn-secondary w-full sm:w-auto">
            Tüm yazılar
          </Link>
        </div>

        {others.length > 0 && (
          <aside className="mt-12 sm:mt-16">
            <h2 className="font-display text-xl font-bold text-ink">
              Diğer yazılar
            </h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/blog/${o.slug}`}
                    className="focus-ring font-medium text-navy-800 hover:text-ember-600"
                  >
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
