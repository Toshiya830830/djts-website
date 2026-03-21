'use client'

import { useState } from 'react'

type FormData = {
  company: string
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialData: FormData = {
  company: '',
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-transparent border-b border-tesla-border text-tesla-dark text-sm py-3 focus:outline-none focus:border-tesla-dark transition-colors placeholder:text-tesla-silver font-light'

  if (submitted) {
    return (
      <div className="text-center py-24">
        <div className="w-12 h-12 border border-tesla-border rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-5 h-5 text-tesla-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-tesla-dark mb-3 tracking-tight">送信完了しました</h2>
        <p className="text-tesla-mid font-light">お問い合わせありがとうございます。2営業日以内にご連絡いたします。</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label htmlFor="company" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
            会社名
          </label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder="株式会社〇〇" />
        </div>
        <div>
          <label htmlFor="name" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
            お名前 <span className="text-tesla-silver">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="山田 太郎" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label htmlFor="email" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
            メールアドレス <span className="text-tesla-silver">*</span>
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="example@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
            電話番号
          </label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="03-0000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
          ご興味のあるサービス
        </label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={`${inputClass} bg-white`}>
          <option value="">選択してください</option>
          <option value="seo">SEO対策</option>
          <option value="ads">Web広告運用</option>
          <option value="sns">SNSマーケティング</option>
          <option value="content">コンテンツマーケティング</option>
          <option value="other">その他・総合相談</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-tesla-mid text-xs uppercase tracking-widest mb-3">
          お問い合わせ内容 <span className="text-tesla-silver">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="現状の課題やご要望をご記入ください" />
      </div>

      <div className="flex flex-col items-start gap-4 pt-4">
        <p className="text-tesla-silver text-xs font-light">
          送信いただいた個人情報は、お問い合わせ対応の目的のみに使用します。
        </p>
        <button
          type="submit"
          className="bg-tesla-dark text-white font-medium px-12 py-4 rounded-full hover:bg-tesla-gray transition-colors text-base"
        >
          送信する
        </button>
      </div>
    </form>
  )
}
