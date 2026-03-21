import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ブログ',
  description:
    'WEBマーケティングに関する最新情報・SEO・Web広告・SNS活用のノウハウをDJTSが発信します。',
  alternates: { canonical: 'https://djts.co.jp/blog/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
    { '@type': 'ListItem', position: 2, name: 'ブログ', item: 'https://djts.co.jp/blog/' },
  ],
}

export default function BlogPage() {
  const posts = getAllPosts()

  // 全タグ収集
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-tesla-silver/60">
            <li><Link href="/" className="hover:text-tesla-silver transition-colors">ホーム</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-tesla-silver">ブログ</li>
          </ol>
        </nav>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">ブログ</h1>
        <p className="text-tesla-silver text-lg font-light max-w-xl">
          WEBマーケティングのノウハウを発信します。
        </p>
      </section>

      {/* Tag filter */}
      {allTags.length > 0 && (
        <section className="bg-white border-b border-tesla-border py-5 px-6 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-tesla-border text-tesla-mid px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-tesla-mid text-center py-24">記事がまだありません。</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-tesla-light rounded-xl overflow-hidden mb-4">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-tesla-border text-tesla-mid px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-tesla-dark font-semibold text-base leading-snug mb-2 group-hover:text-tesla-gray transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-tesla-mid text-sm font-light leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    {/* Date */}
                    <time
                      dateTime={post.date}
                      className="text-xs text-tesla-silver"
                    >
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
