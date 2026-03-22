'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/services', label: 'Service',  sub: 'サービス' },
  { href: '/blog',     label: 'Blog',     sub: 'ブログ' },
  { href: '/about',    label: 'About',    sub: '会社概要' },
  { href: '/contact',  label: 'Contact',  sub: 'お問い合わせ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[72px]"
        style={{
          background: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-cormorant text-[28px] font-semibold tracking-[0.18em] no-underline"
          style={{ color: 'var(--gold)' }}
        >
          DJTS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="グローバルナビゲーション">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-0.5 no-underline transition-colors"
              style={{ color: 'rgba(245,243,238,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,243,238,0.6)')}
            >
              <span className="font-mono-dm text-[11px] tracking-[0.2em] uppercase">{link.label}</span>
              <span className="font-sans text-[9px] tracking-wide font-normal">{link.sub}</span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="font-mono-dm text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 no-underline transition-colors"
            style={{ background: 'var(--gold)', color: 'var(--black)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            無料相談
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-[6px] transition-colors"
          style={{
            background: open ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.08)',
            border: '1px solid var(--border)',
          }}
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
          aria-expanded={open}
        >
          <span
            className="block w-5 transition-all duration-300 origin-center"
            style={{
              height: '1.5px',
              background: 'var(--off-white)',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 transition-all duration-300"
            style={{
              height: '1.5px',
              background: 'var(--off-white)',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block w-5 transition-all duration-300 origin-center"
            style={{
              height: '1.5px',
              background: 'var(--off-white)',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Drawer overlay */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300 md:hidden"
        style={{
          background: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
        }}
        onClick={close}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 flex flex-col pt-24 pb-10 px-10 md:hidden transition-transform duration-400"
        style={{
          width: 280,
          background: '#0f0f0a',
          borderLeft: '1px solid var(--border)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <ul className="list-none flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href} style={{ borderBottom: '1px solid var(--border)' }}>
              <Link
                href={link.href}
                onClick={close}
                className="flex items-center justify-between py-5 no-underline transition-colors"
                style={{ color: 'var(--off-white)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--off-white)')}
              >
                <span className="text-[15px] font-medium">{link.label.toUpperCase()}</span>
                <span className="font-mono-dm text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                  {link.sub}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={close}
          className="mt-9 block text-center text-[13px] font-bold tracking-[0.1em] py-4 no-underline transition-colors"
          style={{ background: 'var(--gold)', color: 'var(--black)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
        >
          FREE CONSULT　無料相談
        </Link>
      </div>
    </>
  )
}
