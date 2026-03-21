import type { Metadata } from 'next'
import Link from 'next/link'
import MatrixRain from '@/components/MatrixRain'

export const metadata: Metadata = {
  title: '株式会社DJTS | WEBマーケティングで成果を出す',
  description:
    '株式会社DJTSは、SEO・Web広告・SNS・コンテンツマーケティングで企業の集客・売上アップを支援するWEBマーケティング会社です。まずは無料相談から。',
  alternates: { canonical: 'https://djts.co.jp/' },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社DJTS',
  url: 'https://djts.co.jp',
  description: 'WEBマーケティング会社。SEO対策・Web広告・SNSマーケティング・コンテンツマーケティングを提供。',
  address: { '@type': 'PostalAddress', addressCountry: 'JP' },
  serviceType: 'WEBマーケティング',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'WEBマーケティングとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WEBマーケティングとは、インターネットを活用して商品・サービスを宣伝し、集客や売上アップを図るマーケティング手法です。SEO・Web広告・SNS・コンテンツマーケティングなど様々な手法があります。',
      },
    },
    {
      '@type': 'Question',
      name: '相談は無料ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、初回のご相談・お見積りは無料です。お気軽にお問い合わせください。',
      },
    },
    {
      '@type': 'Question',
      name: '契約期間はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'サービスによって異なりますが、月単位でのご契約が基本です。長期契約を強制することはありません。',
      },
    },
    {
      '@type': 'Question',
      name: '成果が出るまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'サービスによって異なります。Web広告は最短数日で効果が出ますが、SEOは一般的に3〜6ヶ月程度が目安です。詳しくはご相談ください。',
      },
    },
  ],
}

const faqItems = faqJsonLd.mainEntity

const services = [
  {
    title: 'SEO対策',
    desc: '技術SEO・コンテンツSEO・被リンク獲得の3軸で、検索エンジンからの自然流入を継続的に増やします。',
    href: '/services#seo',
    dark: false,
  },
  {
    title: 'Web広告運用',
    desc: 'Google広告・Meta広告を最適化し、無駄なコストを削減。ROIを最大化する運用を実現します。',
    href: '/services#ads',
    dark: true,
  },
  {
    title: 'SNSマーケティング',
    desc: 'Instagram・X・TikTokなどでブランド認知を高め、ファンを育て、売上につなげます。',
    href: '/services#sns',
    dark: false,
  },
  {
    title: 'コンテンツマーケティング',
    desc: 'SEOと連動した質の高いコンテンツで、継続的なオーガニック集客を実現します。',
    href: '/services#content',
    dark: true,
  },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Matrix Rain background */}
        <MatrixRain />
        {/* Overlay to soften the rain and keep text readable */}
        <div className="absolute inset-0 bg-black/55 z-[1]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            デジタルで、<br />ビジネスを加速する。
          </h1>
          <p className="text-tesla-silver text-lg sm:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
            WEBマーケティングの力で、企業の成長を最大化する。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-tesla-dark font-medium px-10 py-4 rounded-full hover:bg-tesla-light transition-colors text-base">
              無料相談を申し込む
            </Link>
            <Link href="/services" className="border border-white/30 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-base">
              サービスを見る
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-tesla-silver/40 z-10">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Lead */}
      <section className="bg-white py-24 px-6 text-center">
        <p className="text-2xl sm:text-4xl font-light text-tesla-dark max-w-3xl mx-auto leading-relaxed">
          株式会社DJTSは、<br className="hidden sm:block" />
          <span className="font-semibold">SEO・広告・SNS・コンテンツ</span>を組み合わせた<br className="hidden sm:block" />
          統合WEBマーケティングで成果を届けます。
        </p>
      </section>

      {/* Services */}
      {services.map((s) => (
        <section
          key={s.title}
          className={`py-32 px-6 border-t ${s.dark ? 'bg-tesla-dark border-white/10' : 'bg-white border-tesla-border'}`}
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h2 className={`text-4xl sm:text-6xl font-bold tracking-tight mb-6 ${s.dark ? 'text-white' : 'text-tesla-dark'}`}>
              {s.title}
            </h2>
            <p className={`text-lg font-light max-w-lg leading-relaxed mb-10 ${s.dark ? 'text-tesla-silver' : 'text-tesla-mid'}`}>
              {s.desc}
            </p>
            <Link
              href={s.href}
              className={`inline-flex items-center gap-2 font-medium text-sm px-8 py-3 rounded-full border transition-colors ${
                s.dark
                  ? 'border-white/30 text-white hover:bg-white hover:text-tesla-dark'
                  : 'border-tesla-dark text-tesla-dark hover:bg-tesla-dark hover:text-white'
              }`}
            >
              詳しく見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      ))}

      {/* Why DJTS */}
      <section className="bg-white py-32 px-6 border-t border-tesla-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-tesla-dark text-center mb-16 tracking-tight">
            DJTSが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-tesla-border border border-tesla-border rounded-2xl overflow-hidden">
            {[
              { title: '成果へのコミット', desc: 'KPIを明確に設定し、数値で成果をお届けします。定性的な報告ではなく、データで評価します。' },
              { title: '透明性の高いレポート', desc: '毎月詳細なレポートで施策の効果を可視化。何にお金が使われているかを常に明確にします。' },
              { title: '業界特化の知見', desc: '多様な業種での支援実績をもとに、その企業に最適なマーケティング戦略を立案します。' },
            ].map((item) => (
              <div key={item.title} className="p-10">
                <h3 className="text-xl font-semibold text-tesla-dark mb-4">{item.title}</h3>
                <p className="text-tesla-mid text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tesla-light py-28 px-6 border-t border-tesla-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-tesla-dark text-center mb-14 tracking-tight">
            よくある質問
          </h2>
          <div className="divide-y divide-tesla-border border border-tesla-border rounded-2xl bg-white overflow-hidden">
            {faqItems.map((item) => (
              <details key={item.name} className="group">
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                  <span className="font-medium text-tesla-dark text-sm pr-4">{item.name}</span>
                  <svg className="w-4 h-4 text-tesla-mid flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-tesla-mid text-sm font-light leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="h-screen flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-6">
          まずは、話しましょう。
        </h2>
        <p className="text-tesla-silver text-lg font-light mb-12 max-w-md">
          現状の課題をヒアリングし、最適なマーケティング戦略をご提案します。相談は無料です。
        </p>
        <Link href="/contact" className="bg-white text-tesla-dark font-medium px-12 py-4 rounded-full hover:bg-tesla-light transition-colors text-base">
          無料相談を申し込む
        </Link>
      </section>
    </>
  )
}
