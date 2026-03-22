import Link from 'next/link'
import s from '../app/home.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <Link href="/" className={s.footerLogo}>DJTS</Link>
        <p className={s.footerCopy}>© {new Date().getFullYear()} 株式会社DJTS. All rights reserved.</p>
      </div>
    </footer>
  )
}
