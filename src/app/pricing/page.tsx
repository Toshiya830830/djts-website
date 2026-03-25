import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '料金プラン',
  description:
    '株式会社DJTSの料金プラン一覧。SEO対策・Web広告・SNSマーケティング・コンテンツマーケティング・WEBサイト制作の明確な料金体系をご確認いただけます。',
  alternates: { canonical: 'https://djts.co.jp/pricing/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://djts.co.jp/' },
    { '@type': 'ListItem', position: 2, name: '料金プラン', item: 'https://djts.co.jp/pricing/' },
  ],
}

const seoPlans = [
  {
    name: 'ライト',
    price: '¥50,000',
    unit: '/月',
    features: ['キーワード5個', '月次レポート', '月1回MTG'],
    recommended: false,
  },
  {
    name: 'スタンダード',
    price: '¥100,000',
    unit: '/月',
    features: ['キーワード15個', '月次レポート', '改善提案', '月2回MTG'],
    recommended: true,
  },
  {
    name: 'プロ',
    price: '¥200,000',
    unit: '/月〜',
    features: ['キーワード無制限', '週次レポート', '戦略立案', '専任担当'],
    recommended: false,
  },
]

const otherServices = [
  {
    id: 'ads',
    title: 'Web広告運用',
    subtitle: 'Google広告 / Meta広告',
    dark: true,
    items: [
      { label: '運用手数料', value: '広告費の20%（最低月額 ¥30,000）' },
      { label: '初期設定費', value: '¥50,000' },
      { label: '広告費', value: '別途（実費）' },
    ],
    note: '※広告費は別途、実費をご負担いただきます。',
  },
  {
    id: 'sns',
    title: 'SNSマーケティング',
    subtitle: 'Instagram / X / TikTok など',
    dark: false,
    items: [
      { label: '月額プラン', value: '¥50,000/月〜' },
      { label: '含まれる内容', value: '投稿作成・アカウント運用・月次レポート' },
    ],
    note: '※運用チャネル数・投稿頻度により異なります。詳細はお問い合わせください。',
  },
  {
    id: 'content',
    title: 'コンテンツマーケティング',
    subtitle: 'SEO記事制作・コンテンツ戦略',
    dark: true,
    items: [
      { label: '記事単体制作', value: '¥20,000〜 / 1本' },
      { label: '月額プラン', value: '¥50,000〜/月（4本/月・SEO最適化込み）' },
    ],
    note: '※文字数・専門性・リサーチ範囲により変動します。',
  },
  {
    id: 'web',
    title: 'WEBサイト制作',
    subtitle: 'コーポレートサイト・LP制作',
    dark: false,
    items: [
      { label: 'ランディングページ', value: '¥100,000〜' },
      { label: 'コーポレートサイト（シンプル）', value: '¥200,000〜' },
      { label: 'コーポレートサイト（カスタム）', value: '¥500,000〜' },
    ],
    note: '※保守・運用費は別途お見積もりいたします。',
  },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6">
        <nav aria-label="パンくずリスト" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-tesla-silver/60">
            <li><Link href="/" className="hover:text-tesla-silver transition-colors">ホーム</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li aria-current="page" className="text-tesla-silver">料金プラン</li>
          </ol>
        </nav>
        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">料金プラン</h1>
        <p className="text-tesla-silver text-lg font-light max-w-xl">
          明確な料金体系で、安心してご依頼いただけます。
        </p>
      </section>

      {/* SEO Plans */}
      <section className="bg-white py-28 px-6 border-t border-tesla-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-tesla-mid text-xs uppercase tracking-widest mb-4 text-center">SEO対策</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-tesla-dark tracking-tight text-center mb-16">
            SEO対策プラン
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-tesla-border rounded-2xl overflow-hidden">
            {seoPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-10 flex flex-col ${
                  plan.recommended ? 'bg-tesla-dark' : 'bg-white'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-6 right-6 text-[10px] tracking-widest uppercase font-medium px-3 py-1 border border-tesla-silver/30 text-tesla-silver rounded-full">
                    おすすめ
                  </span>
                )}
                <p className={`text-sm font-medium mb-6 ${plan.recommended ? 'text-tesla-silver' : 'text-tesla-mid'}`}>
                  {plan.name}
                </p>
                <div className="mb-8">
                  <span className={`text-4xl font-bold tracking-tight ${plan.recommended ? 'text-white' : 'text-tesla-dark'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.recommended ? 'text-tesla-silver' : 'text-tesla-mid'}`}>
                    {plan.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm font-light ${plan.recommended ? 'text-tesla-silver' : 'text-tesla-gray'}`}>
                      <svg className={`w-4 h-4 flex-shrink-0 ${plan.recommended ? 'text-tesla-silver/60' : 'text-tesla-mid'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center text-sm font-medium px-6 py-3 rounded-full transition-colors ${
                    plan.recommended
                      ? 'bg-white text-tesla-dark hover:bg-tesla-light'
                      : 'border border-tesla-border text-tesla-dark hover:bg-tesla-light'
                  }`}
                >
                  このプランで相談する
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      {otherServices.map((svc) => (
        <section
          key={svc.id}
          className={`py-28 px-6 border-t ${svc.dark ? 'bg-tesla-dark border-white/10' : 'bg-white border-tesla-border'}`}
        >
          <div className="max-w-3xl mx-auto">
            <p className={`text-xs uppercase tracking-widest mb-3 ${svc.dark ? 'text-tesla-silver/60' : 'text-tesla-mid'}`}>
              {svc.subtitle}
            </p>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-12 ${svc.dark ? 'text-white' : 'text-tesla-dark'}`}>
              {svc.title}
            </h2>

            <div className={`rounded-2xl overflow-hidden border divide-y ${
              svc.dark ? 'border-white/10 divide-white/10' : 'border-tesla-border divide-tesla-border'
            }`}>
              {svc.items.map((item) => (
                <div key={item.label} className={`flex flex-col sm:flex-row sm:items-center gap-2 px-8 py-5 ${svc.dark ? 'bg-white/5' : 'bg-white'}`}>
                  <dt className={`text-sm font-light w-full sm:w-48 flex-shrink-0 ${svc.dark ? 'text-tesla-silver/70' : 'text-tesla-mid'}`}>
                    {item.label}
                  </dt>
                  <dd className={`text-sm font-medium ${svc.dark ? 'text-white' : 'text-tesla-dark'}`}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>

            {svc.note && (
              <p className={`mt-4 text-xs font-light ${svc.dark ? 'text-tesla-silver/50' : 'text-tesla-mid'}`}>
                {svc.note}
              </p>
            )}

            <div className="mt-10">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 font-medium text-sm px-8 py-3 rounded-full transition-colors ${
                  svc.dark
                    ? 'bg-white text-tesla-dark hover:bg-tesla-light'
                    : 'bg-tesla-dark text-white hover:bg-tesla-gray'
                }`}
              >
                詳細・お見積もりを相談する
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-tesla-dark text-center px-6 border-t border-white/10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
          まずは無料相談から
        </h2>
        <p className="text-tesla-silver font-light mb-10 max-w-md">
          予算・目標・課題をヒアリングし、最適なプランをご提案します。費用は一切かかりません。
        </p>
        <Link
          href="/contact"
          className="bg-white text-tesla-dark font-medium px-12 py-4 rounded-full hover:bg-tesla-light transition-colors text-base"
        >
          無料相談を申し込む
        </Link>
      </section>
    </>
  )
}
