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

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [post.cover],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-paper">
      <header className="bg-navy-900 py-16 text-white md:py-20">
        <div className="container-page max-w-3xl">
          <nav className="text-sm text-steel-400" aria-label="Breadcrumb">
            <Link href="/blog" className="focus-ring hover:text-white">
              Blog
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-steel-300">{post.category}</span>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-ember-400">
            {post.category} · {formatTrDate(post.date)}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-steel-300">{post.excerpt}</p>
        </div>
      </header>

      {hasKnownProductImage(post.cover) && (
        <div className="container-page -mt-8 max-w-3xl">
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

      <div className="container-page max-w-3xl py-12 md:py-16">
        <div className="space-y-5 text-base leading-relaxed text-steel-500 md:text-lg">
          {post.content.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-steel-200 pt-8">
          <Link href="/iletisim#teklif" className="btn-primary">
            Teklif Al
          </Link>
          <Link href="/blog" className="btn-secondary">
            Tüm yazılar
          </Link>
        </div>

        {others.length > 0 && (
          <aside className="mt-16">
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
