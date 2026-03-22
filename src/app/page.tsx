import type { Metadata } from 'next'
import Link from 'next/link'

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
  ],
}

const services = [
  {
    num: '01',
    icon: '🔍',
    title: 'SEO対策',
    desc: '技術SEO・コンテンツSEO・被リンク獲得の3軸で、検索エンジンからの自然流入を継続的に増やします。',
    href: '/services#seo',
  },
  {
    num: '02',
    icon: '📊',
    title: 'Web広告運用',
    desc: 'Google広告・Meta広告を最適化し、無駄なコストを削減。ROIを最大化する運用を実現します。',
    href: '/services#ads',
  },
  {
    num: '03',
    icon: '📱',
    title: 'SNSマーケティング',
    desc: 'Instagram・X・TikTokなどでブランド認知を高め、ファンを育て、売上につなげます。',
    href: '/services#sns',
  },
  {
    num: '04',
    icon: '✍️',
    title: 'コンテンツマーケティング',
    desc: 'SEOと連動した質の高いコンテンツで、継続的なオーガニック集客を実現します。',
    href: '/services#content',
  },
  {
    num: '05',
    icon: '🎬',
    title: '動画編集',
    desc: 'YouTube・SNS・広告用の動画をプロが編集。ブランドの世界観を映像で表現し、エンゲージメントを高めます。',
    href: '/services#video',
    center: true,
  },
]

const whyItems = [
  {
    num: '01',
    title: '成果へのコミット',
    desc: 'KPIを明確に設定し、数値で成果をお届けします。定性的な報告ではなく、データで評価します。',
  },
  {
    num: '02',
    title: '透明性の高いレポート',
    desc: '毎月詳細なレポートで施策の効果を可視化。何にお金が使われているかを常に明確にします。',
  },
  {
    num: '03',
    title: '業界特化の知見',
    desc: '多様な業種での支援実績をもとに、その企業に最適なマーケティング戦略を立案します。',
  },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #111008 60%, #0d0c06 100%)' }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: '50%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Vertical accent lines */}
        <div
          className="absolute hidden md:block"
          style={{
            right: 80,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)',
            opacity: 0.3,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[700px]">
          {/* Label */}
          <div
            className="animate-fade-up-1 flex items-center gap-3 mb-8"
            style={{ color: 'var(--gold)' }}
          >
            <span className="block w-8 h-px" style={{ background: 'var(--gold)' }} />
            <span className="font-mono-dm text-[11px] tracking-[0.3em] uppercase">Web Marketing Agency</span>
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up-2 font-bold leading-[1.1] tracking-tight mb-7"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            デジタルで、<br />
            ビジネスを<em className="not-italic" style={{ color: 'var(--gold)' }}>加速</em>する。
          </h1>

          {/* Sub copy */}
          <p
            className="animate-fade-up-3 text-[16px] font-light leading-[1.8] mb-14 max-w-[440px]"
            style={{ color: 'rgba(245,243,238,0.6)' }}
          >
            SEO・広告・SNS・コンテンツを組み合わせた統合WEBマーケティングで、企業の成長を最大化します。
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] px-9 py-4 no-underline transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--gold)', color: 'var(--black)' }}
            >
              無料相談を申し込む →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] px-9 py-4 no-underline transition-all hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--border)',
                color: 'rgba(245,243,238,0.7)',
              }}
            >
              サービスを見る
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'scrollPulse 2s ease infinite' }}
          />
          <span className="font-mono-dm text-[9px] tracking-[0.3em] uppercase" style={{ color: 'var(--gray)' }}>Scroll</span>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <div
        className="flex items-center justify-center px-6 py-7"
        style={{ background: 'var(--gold)' }}
      >
        <p className="text-[15px] font-bold text-center leading-[1.7] tracking-[0.03em]" style={{ color: 'var(--black)' }}>
          株式会社DJTSは、<strong className="text-[17px]">SEO・広告・SNS・コンテンツ</strong>を組み合わせた<br className="hidden sm:block" />
          統合WEBマーケティングで成果を届けます。
        </p>
      </div>

      {/* ── SERVICES ── */}
      <section className="px-6 md:px-10 py-28 md:py-32" style={{ background: 'var(--off-white)', color: 'var(--black)' }}>
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-20">
          <span
            className="font-mono-dm text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
            style={{ color: 'var(--gold)', border: '1px solid var(--gold)' }}
          >
            Services
          </span>
          <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            提供サービス
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 2, background: 'rgba(0,0,0,0.08)' }}
        >
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </section>

      {/* ── WHY DJTS ── */}
      <section className="px-6 md:px-10 py-28 md:py-32" style={{ background: 'var(--black)' }}>
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-16">
          <span
            className="font-mono-dm text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
            style={{ color: 'var(--gold)', border: '1px solid var(--gold)' }}
          >
            Why DJTS
          </span>
          <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--off-white)' }}>
            選ばれる理由
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 1, background: 'var(--border)' }}
        >
          {whyItems.map((item) => (
            <div
              key={item.num}
              className="px-10 py-12 transition-colors"
              style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
            >
              <div
                className="font-cormorant font-light leading-none mb-5"
                style={{ fontSize: 48, color: 'var(--gold)' }}
              >
                {item.num}
              </div>
              <h3 className="text-[17px] font-bold mb-3.5" style={{ color: 'var(--off-white)' }}>
                {item.title}
              </h3>
              <p className="text-[13px] font-light leading-[1.85]" style={{ color: 'var(--gray)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative px-6 py-24 md:py-28 text-center overflow-hidden"
        style={{ background: 'var(--gold)' }}
      >
        {/* Watermark */}
        <div
          className="font-cormorant font-semibold absolute top-1/2 left-1/2 pointer-events-none whitespace-nowrap select-none"
          style={{
            fontSize: 240,
            transform: 'translate(-50%, -50%)',
            color: 'rgba(0,0,0,0.05)',
            lineHeight: 1,
          }}
        >
          DJTS
        </div>
        <h2
          className="relative font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--black)' }}
        >
          まずは、話しましょう。
        </h2>
        <p
          className="relative text-[15px] mb-12"
          style={{ color: 'rgba(10,10,10,0.65)' }}
        >
          現状の課題をヒアリングし、最適なマーケティング戦略をご提案します。相談は無料です。
        </p>
        <Link
          href="/contact"
          className="relative inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] px-12 py-[18px] no-underline transition-all hover:-translate-y-0.5"
          style={{
            background: 'var(--black)',
            color: 'var(--gold)',
            boxShadow: '0 0 0 0 rgba(0,0,0,0)',
          }}
        >
          無料相談を申し込む →
        </Link>
      </section>
    </>
  )
}

function ServiceCard({
  num,
  icon,
  title,
  desc,
  href,
  center,
}: {
  num: string
  icon: string
  title: string
  desc: string
  href: string
  center?: boolean
}) {
  return (
    <div
      className="relative overflow-hidden px-10 py-12 md:py-14 group transition-colors"
      style={{
        background: 'var(--off-white)',
        gridColumn: center ? undefined : undefined,
      }}
      data-center={center ? 'true' : undefined}
    >
      {/* Left gold bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] origin-bottom transition-transform duration-[400ms] scale-y-0 group-hover:scale-y-100"
        style={{ background: 'var(--gold)' }}
      />
      {/* Background number */}
      <div
        className="font-cormorant font-light absolute top-6 right-8 leading-none transition-colors duration-[400ms]"
        style={{ fontSize: 64, color: 'rgba(0,0,0,0.06)' }}
      >
        {num}
      </div>
      <div className="text-[28px] mb-5">{icon}</div>
      <h3 className="text-[22px] font-bold mb-4 tracking-tight" style={{ color: 'var(--black)' }}>
        {title}
      </h3>
      <p className="text-[14px] font-light leading-[1.85] mb-7" style={{ color: '#555' }}>
        {desc}
      </p>
      <Link
        href={href}
        className="font-mono-dm text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-2 no-underline transition-all"
        style={{ color: 'var(--gold)' }}
      >
        詳しく見る →
      </Link>
    </div>
  )
}
