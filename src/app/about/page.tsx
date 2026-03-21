import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '株式会社DJTSの会社概要ページ。WEBマーケティング専門会社として、企業のデジタルマーケティングを総合的に支援しています。',
  alternates: { canonical: 'https://djts.co.jp/about/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
    { '@type': 'ListItem', position: 2, name: '会社概要', item: 'https://djts.co.jp/about/' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社DJTS',
  legalName: '株式会社DJTS',
  url: 'https://djts.co.jp',
  foundingDate: '2026-03-11',
  address: { '@type': 'PostalAddress', addressCountry: 'JP' },
}

const companyInfo = [
  { label: '会社名', value: '株式会社DJTS' },
  { label: '英語名', value: 'DJTS Inc.' },
  { label: '設立', value: '2026年3月11日' },
  { label: '事業内容', value: 'WEBマーケティング事業（SEO対策・Web広告運用・SNSマーケティング・コンテンツマーケティング）' },
  { label: '所在地', value: '日本' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      {/* Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-tesla-silver/60">
            <li><a href="/" className="hover:text-tesla-silver transition-colors">ホーム</a></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-tesla-silver">会社概要</li>
          </ol>
        </nav>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">会社概要</h1>
        <p className="text-tesla-silver text-lg font-light max-w-xl">
          WEBマーケティングを通じて、企業の成長を支援します。
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white py-32 px-6 border-t border-tesla-border text-center">
        <p className="text-tesla-mid text-xs uppercase tracking-widest mb-6">Mission</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-tesla-dark tracking-tight leading-tight max-w-3xl mx-auto mb-8">
          デジタルの力で、<br />すべての企業に成長の機会を。
        </h2>
        <p className="text-tesla-mid font-light max-w-xl mx-auto leading-relaxed">
          私たちは、WEBマーケティングの力で中小企業から大企業まで、
          あらゆる規模の企業が公平にデジタルの恩恵を受けられる社会を目指しています。
        </p>
      </section>

      {/* Company Info */}
      <section className="bg-tesla-light py-28 px-6 border-t border-tesla-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-tesla-dark tracking-tight mb-12">会社情報</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-tesla-border divide-y divide-tesla-border">
            {companyInfo.map((item) => (
              <div key={item.label} className="grid grid-cols-3 gap-4 px-8 py-5">
                <dt className="text-tesla-mid text-sm font-light">{item.label}</dt>
                <dd className="col-span-2 text-tesla-dark text-sm font-light">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-tesla-dark py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white tracking-tight text-center mb-16">価値観</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { title: '誠実さ', desc: '数値に基づいた透明性の高い報告と、誠実なコミュニケーションを大切にします。' },
              { title: '成果へのコミット', desc: '「やった」ではなく「成果を出した」にこだわります。KPIを明確にし、結果で評価されます。' },
              { title: '継続的な学習', desc: '変化の早いデジタル業界で最新のトレンドを追い続け、常に最高の提案をします。' },
            ].map((v) => (
              <div key={v.title} className="bg-tesla-dark p-10">
                <h3 className="text-xl font-semibold text-white mb-4">{v.title}</h3>
                <p className="text-tesla-silver text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
