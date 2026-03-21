'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/services', label: 'SERVICE' },
  { href: '/blog',     label: 'BLOG' },
  { href: '/about',    label: 'ABOUT' },
  { href: '/contact',  label: 'CONTACT' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* メインバー */}
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">

        {/* ロゴ */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="株式会社DJTS"
            width={320}
            height={60}
            style={{ width: 170, height: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="グローバルナビゲーション">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-[0.2em] text-tesla-gray hover:text-tesla-dark transition-colors"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="text-xs font-bold tracking-[0.15em] px-5 py-2 border border-tesla-dark text-tesla-dark hover:bg-tesla-dark hover:text-white transition-colors"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            FREE CONSULT
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 text-tesla-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 下部区切り線 */}
      <div className="h-px bg-tesla-border" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-8 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-xs font-bold tracking-[0.2em] text-tesla-gray hover:text-tesla-dark py-3 border-b border-tesla-border/50 transition-colors"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block text-center text-xs font-bold tracking-[0.15em] border border-tesla-dark text-tesla-dark px-5 py-3 hover:bg-tesla-dark hover:text-white transition-colors"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              FREE CONSULT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
