'use client'

import { useState } from 'react'
import Link from 'next/link'
import s from '../app/home.module.css'

const navLinks = [
  { href: '/services', label: 'SERVICE', sub: 'サービス' },
  { href: '/blog',     label: 'BLOG',    sub: 'ブログ' },
  { href: '/about',    label: 'ABOUT',   sub: '会社概要' },
  { href: '/contact',  label: 'CONTACT', sub: 'お問い合わせ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className={s.nav}>
        <Link href="/" className={s.logo}>DJTS</Link>

        {/* Desktop links */}
        <ul className={s.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className={s.navLabelEn}>{link.label}</span>
                <span className={s.navLabelJa}>{link.sub}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={s.navCta}>無料相談</Link>

        {/* Hamburger */}
        <button
          className={`${s.hamburger}${open ? ' ' + s.hamburgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Drawer overlay */}
      <div
        className={`${s.drawerOverlay}${open ? ' ' + s.drawerOverlayOpen : ''}`}
        onClick={close}
      />

      {/* Drawer */}
      <div className={`${s.drawer}${open ? ' ' + s.drawerOpen : ''}`}>
        <ul className={s.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={close}>
                <span>{link.label}</span>
                <span className={s.drawerEn}>{link.sub}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={s.drawerCta} onClick={close}>
          FREE CONSULT　無料相談
        </Link>
      </div>
    </>
  )
}
