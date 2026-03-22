import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center gap-4 px-10 py-10"
      style={{
        background: '#050505',
        borderTop: '1px solid var(--border)',
      }}
    >
      <Link
        href="/"
        className="font-cormorant text-[22px] font-semibold tracking-[0.18em] no-underline"
        style={{ color: 'var(--gold)' }}
      >
        DJTS
      </Link>
      <p
        className="font-mono-dm text-[10px] tracking-[0.15em] text-center"
        style={{ color: 'var(--gray)' }}
      >
        © {new Date().getFullYear()} 株式会社DJTS. All rights reserved.
      </p>
    </footer>
  )
}
