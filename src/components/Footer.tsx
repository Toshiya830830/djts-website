import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-tesla-dark text-tesla-silver text-xs">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p>&copy; {new Date().getFullYear()} 株式会社DJTS. All rights reserved.</p>
          <nav className="flex flex-wrap gap-6" aria-label="フッターナビ">
            <Link href="/services" className="hover:text-white transition-colors">サービス</Link>
            <Link href="/blog" className="hover:text-white transition-colors">ブログ</Link>
            <Link href="/about" className="hover:text-white transition-colors">会社概要</Link>
            <Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
