'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/services', label: 'サービス' },
  { href: '/blog', label: 'ブログ' },
  { href: '/about', label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero is dark → white text; after scroll → dark text on white bg
  const isDark = !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        menuOpen ? 'bg-white' : scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="株式会社DJTS"
            width={150}
            height={0}
            style={{ width: 150, height: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                isDark ? 'text-white/80 hover:text-white' : 'text-tesla-mid hover:text-tesla-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm font-medium px-5 py-2 rounded-full transition-colors ${
              isDark
                ? 'bg-white text-tesla-dark hover:bg-white/90'
                : 'bg-tesla-dark text-white hover:bg-tesla-gray'
            }`}
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className={`md:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-tesla-dark'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-tesla-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-tesla-mid hover:text-tesla-dark text-sm py-2 tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center bg-tesla-dark text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-tesla-gray transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            無料相談
          </Link>
        </div>
      )}
    </header>
  )
}
