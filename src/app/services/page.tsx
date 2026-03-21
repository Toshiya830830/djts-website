import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'サービス',
  description:
    '株式会社DJTSのWEBマーケティングサービス一覧。SEO対策・Web広告運用・SNSマーケティング・コンテンツマーケティングを提供しています。',
  alternates: { canonical: 'https://djts.co.jp/services/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
    { '@type': 'ListItem', position: 2, name: 'サービス', item: 'https://djts.co.jp/services/' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'SEO対策の効果が出るまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一般的に3〜6ヶ月が目安です。サイトの状態や競合状況によって異なりますが、継続的な施策により長期的な流入増加が期待できます。',
      },
    },
    {
      '@type': 'Question',
      name: 'Web広告の最低予算はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '広告費は月額10万円から対応しています。業種や目標によって最適な予算をご提案します。まずはご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '複数のサービスをまとめて依頼できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、SEO・広告・SNS・コンテンツマーケティングを組み合わせた統合プランもご用意しています。ご要望に合わせてカスタマイズします。',
      },
    },
  ],
}

const services = [
  {
    id: 'seo',
    title: 'SEO対策',
    subtitle: '検索上位を獲得し、継続的な集客を実現',
    desc: '技術SEO・コンテンツSEO・被リンク獲得の3軸で、検索エンジンからの自然流入を増やします。Googleのアルゴリズム変動にも対応できる、長期的に強いサイトを構築します。',
    features: ['テクニカルSEO監査・改善', 'キーワード戦略立案', 'SEOライティング支援', '被リンク獲得施策', '競合分析', '月次レポート'],
    dark: false,
  },
  {
    id: 'ads',
    title: 'Web広告運用',
    subtitle: '無駄なコストを削減し、ROIを最大化',
    desc: 'Google広告・Meta広告・Yahoo!広告など各プラットフォームの特性を活かした広告運用で、最小限のコストで最大限の成果を実現します。',
    features: ['Google広告運用', 'Meta（Facebook/Instagram）広告', 'Yahoo!広告', 'リターゲティング広告', 'LP改善提案', '費用対効果レポート'],
    dark: true,
  },
  {
    id: 'sns',
    title: 'SNSマーケティング',
    subtitle: 'ブランド認知から顧客獲得まで一貫支援',
    desc: 'Instagram・X（Twitter）・TikTok・LINEなど、ターゲットに合ったSNSチャネルを選定し、ブランドのファンを育て、売上につなげる戦略を実行します。',
    features: ['SNS戦略立案', 'アカウント運用代行', 'コンテンツ制作', 'インフルエンサー施策', 'SNS広告運用', '効果測定・レポート'],
    dark: false,
  },
  {
    id: 'content',
    title: 'コンテンツマーケティング',
    subtitle: 'SEOと連動した質の高いコンテンツで集客',
    desc: 'ターゲット顧客が検索するキーワードに合わせたコンテンツを継続的に制作・発信し、オーガニック流入を増やします。ブログ・ホワイトペーパー・動画など多形式に対応します。',
    features: ['コンテンツ戦略立案', 'SEO記事制作', 'ホワイトペーパー作成', 'メルマガ運用', 'コンテンツ効果測定', 'リライト・改善'],
    dark: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        {/* Breadcrumb */}
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-tesla-silver/60">
            <li><Link href="/" className="hover:text-tesla-silver transition-colors">ホーム</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-tesla-silver">サービス</li>
          </ol>
        </nav>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">サービス</h1>
        <p className="text-tesla-silver text-lg font-light max-w-xl">
          4つのサービスを組み合わせた統合WEBマーケティングで、企業の成長を加速します。
        </p>
      </section>

      {/* Services */}
      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-28 px-6 border-t ${s.dark ? 'bg-tesla-dark border-white/10' : 'bg-white border-tesla-border'}`}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 ${s.dark ? 'text-white' : 'text-tesla-dark'}`}>
                {s.title}
              </h2>
              <p className={`text-sm font-light mb-6 tracking-wide ${s.dark ? 'text-tesla-silver' : 'text-tesla-mid'}`}>
                {s.subtitle}
              </p>
              <p className={`leading-relaxed font-light mb-10 ${s.dark ? 'text-tesla-silver' : 'text-tesla-mid'}`}>
                {s.desc}
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 font-medium text-sm px-8 py-3 rounded-full transition-colors ${
                  s.dark
                    ? 'bg-white text-tesla-dark hover:bg-tesla-light'
                    : 'bg-tesla-dark text-white hover:bg-tesla-gray'
                }`}
              >
                このサービスを相談する
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className={`rounded-2xl p-8 border ${s.dark ? 'border-white/10' : 'border-tesla-border'}`}>
              <p className={`text-xs uppercase tracking-widest mb-6 ${s.dark ? 'text-tesla-silver/60' : 'text-tesla-mid'}`}>
                含まれる内容
              </p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm font-light ${s.dark ? 'text-tesla-silver' : 'text-tesla-gray'}`}>
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.dark ? 'bg-tesla-silver/40' : 'bg-tesla-mid'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-tesla-light py-28 px-6 border-t border-tesla-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-tesla-dark text-center mb-12 tracking-tight">よくある質問</h2>
          <div className="divide-y divide-tesla-border border border-tesla-border rounded-2xl bg-white overflow-hidden">
            {faqJsonLd.mainEntity.map((item) => (
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
      <section className="h-[60vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6 border-t border-white/10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
          どのサービスが合うか迷っていますか？
        </h2>
        <p className="text-tesla-silver font-light mb-10 max-w-md">
          現状の課題をヒアリングし、最適なプランをご提案します。
        </p>
        <Link href="/contact" className="bg-white text-tesla-dark font-medium px-12 py-4 rounded-full hover:bg-tesla-light transition-colors text-base">
          無料相談を申し込む
        </Link>
      </section>
    </>
  )
}
