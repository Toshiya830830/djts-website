import type { Metadata } from 'next'
import Link from 'next/link'
import s from './home.module.css'

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
        text: 'WEBマーケティングとは、インターネットを活用して商品・サービスを宣伝し、集客や売上アップを図るマーケティング手法です。',
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
  ],
}

const services = [
  { num: '01', icon: '🔍', title: 'SEO対策',               desc: '技術SEO・コンテンツSEO・被リンク獲得の3軸で、検索エンジンからの自然流入を継続的に増やします。', href: '/services#seo' },
  { num: '02', icon: '📊', title: 'Web広告運用',            desc: 'Google広告・Meta広告を最適化し、無駄なコストを削減。ROIを最大化する運用を実現します。',      href: '/services#ads' },
  { num: '03', icon: '📱', title: 'SNSマーケティング',       desc: 'Instagram・X・TikTokなどでブランド認知を高め、ファンを育て、売上につなげます。',            href: '/services#sns' },
  { num: '04', icon: '✍️', title: 'コンテンツマーケティング', desc: 'SEOと連動した質の高いコンテンツで、継続的なオーガニック集客を実現します。',              href: '/services#content' },
  { num: '05', icon: '🎬', title: '動画編集',               desc: 'YouTube・SNS・広告用の動画をプロが編集。ブランドの世界観を映像で表現し、エンゲージメントを高めます。', href: '/services#video' },
  { num: '06', icon: '🌐', title: 'WEBサイト制作',          desc: 'SEOを意識した設計・デザイン・実装で、集客につながるWEBサイトを制作します。',               href: '/services#web' },
]

const whyItems = [
  { num: '01', title: '成果へのコミット',    desc: 'KPIを明確に設定し、数値で成果をお届けします。定性的な報告ではなく、データで評価します。' },
  { num: '02', title: '透明性の高いレポート', desc: '毎月詳細なレポートで施策の効果を可視化。何にお金が使われているかを常に明確にします。' },
  { num: '03', title: '業界特化の知見',     desc: '多様な業種での支援実績をもとに、その企業に最適なマーケティング戦略を立案します。' },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className={s.heroGlow} />
        <div className={s.heroLines} />

        <div className={`${s.heroContent} anim-1`}>
          <div className={`${s.heroLabel} anim-1`}>
            <span className={s.heroLabelLine} />
            Web Marketing Agency
          </div>

          <h1 className={`${s.heroTitle} anim-2`}>
            <span className={s.heroTitleLine}>デジタルで、</span>
            <span className={s.heroTitleLine2}>ビジネスを<em className={s.heroAccent}>加速</em>する。</span>
          </h1>

          <p className={`${s.heroSub} anim-3`}>
            SEO・広告・SNS・コンテンツを組み合わせた統合WEBマーケティングで、企業の成長を最大化します。
          </p>

          <div className={`${s.heroActions} anim-4`}>
            <Link href="/contact" className={s.btnPrimary}>無料相談を申し込む →</Link>
            <Link href="/services" className={s.btnSecondary}>サービスを見る</Link>
          </div>
        </div>

        <div className={`${s.scrollHint} anim-5`}>
          <div className={s.scrollLine} />
          <span className={s.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <div className={s.intro}>
        <p className={s.introText}>
          株式会社DJTSは、<strong className={s.introStrong}>SEO・広告・SNS・コンテンツ</strong>を組み合わせた<br className="hidden sm:block" />
          統合WEBマーケティングで成果を届けます。
        </p>
      </div>

      {/* ── SERVICES ── */}
      <section className={s.services}>
        <div className={s.sectionHeader}>
          <span className={s.sectionLabel}>Services</span>
          <h2 className={s.sectionTitle}>提供サービス</h2>
        </div>

        <div className={s.servicesGrid}>
          {services.map((sv) => (
            <div key={sv.num} className={s.serviceCard}>
              <div className={s.serviceNum}>{sv.num}</div>
              <div className={s.serviceIcon}>{sv.icon}</div>
              <h3 className={s.serviceName}>{sv.title}</h3>
              <p className={s.serviceDesc}>{sv.desc}</p>
              <Link href={sv.href} className={s.serviceLink}>詳しく見る →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY DJTS ── */}
      <section className={s.why}>
        <div className={s.sectionHeader}>
          <span className={s.sectionLabel}>Why DJTS</span>
          <h2 className={s.sectionTitle} style={{ color: 'var(--off-white)' }}>選ばれる理由</h2>
        </div>

        <div className={s.whyGrid}>
          {whyItems.map((w) => (
            <div key={w.num} className={s.whyItem}>
              <div className={s.whyNum}>{w.num}</div>
              <h3 className={s.whyTitle}>{w.title}</h3>
              <p className={s.whyDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={s.ctaBanner}>
        <div className={s.ctaWatermark}>DJTS</div>
        <h2 className={s.ctaTitle}>まずは、話しましょう。</h2>
        <p className={s.ctaSub}>現状の課題をヒアリングし、最適なマーケティング戦略をご提案します。相談は無料です。</p>
        <Link href="/contact" className={s.btnDark}>無料相談を申し込む →</Link>
      </section>
    </>
  )
}
