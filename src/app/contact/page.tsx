import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '株式会社DJTSへのお問い合わせページ。WEBマーケティングに関するご相談・お見積りは無料です。お気軽にお問い合わせください。',
  alternates: { canonical: 'https://djts.co.jp/contact/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
    { '@type': 'ListItem', position: 2, name: 'お問い合わせ', item: 'https://djts.co.jp/contact/' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-tesla-silver/60">
            <li><a href="/" className="hover:text-tesla-silver transition-colors">ホーム</a></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-tesla-silver">お問い合わせ</li>
          </ol>
        </nav>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">お問い合わせ</h1>
        <p className="text-tesla-silver text-lg font-light max-w-md">
          ご相談・お見積りは無料です。お気軽にご連絡ください。
        </p>
      </section>

      {/* Form */}
      <section className="bg-white py-20 px-6 border-t border-tesla-border">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
