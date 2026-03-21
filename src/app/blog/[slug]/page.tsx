import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://djts.co.jp/blog/${params.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://djts.co.jp${post.thumbnail}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: '株式会社DJTS', url: 'https://djts.co.jp' },
    publisher: {
      '@type': 'Organization',
      name: '株式会社DJTS',
      logo: { '@type': 'ImageObject', url: 'https://djts.co.jp/og-image.png' },
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
      { '@type': 'ListItem', position: 2, name: 'ブログ', item: 'https://djts.co.jp/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://djts.co.jp/blog/${params.slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <div className="pt-16 bg-white">
        {/* Thumbnail */}
        <div className="relative w-full aspect-[2.4/1] bg-tesla-light overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav aria-label="パンくずリスト" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-tesla-silver">
              <li><Link href="/" className="hover:text-tesla-mid transition-colors">ホーム</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li><Link href="/blog" className="hover:text-tesla-mid transition-colors">ブログ</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li aria-current="page" className="text-tesla-mid truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-tesla-border text-tesla-mid px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-tesla-dark tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          {/* Date */}
          <time dateTime={post.date} className="text-sm text-tesla-silver block mb-12">
            {new Date(post.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          {/* Content */}
          <article
            className="prose prose-sm sm:prose max-w-none
              prose-headings:font-bold prose-headings:text-tesla-dark prose-headings:tracking-tight
              prose-p:text-tesla-mid prose-p:font-light prose-p:leading-relaxed
              prose-li:text-tesla-mid prose-li:font-light
              prose-strong:text-tesla-dark prose-strong:font-semibold
              prose-a:text-tesla-dark prose-a:underline
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-tesla-border prose-h2:pb-2
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-tesla-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-tesla-mid hover:text-tesla-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-tesla-dark py-20 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
          WEBマーケティングのご相談は無料です
        </h2>
        <p className="text-tesla-silver font-light mb-8 max-w-md mx-auto">
          お気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="bg-white text-tesla-dark font-medium px-10 py-4 rounded-full hover:bg-tesla-light transition-colors"
        >
          無料相談を申し込む
        </Link>
      </section>
    </>
  )
}
