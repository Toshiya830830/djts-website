# 株式会社DJTS 企業サイト

Next.js 14 + Tailwind CSS で構築した企業サイトです。

## 開発サーバーの起動

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド

```bash
npm run build
```

## ページ構成

| パス | 内容 |
|---|---|
| `/` | トップページ |
| `/services` | サービス一覧 |
| `/blog` | ブログ記事一覧 |
| `/blog/[slug]` | ブログ記事詳細 |
| `/about` | 会社概要 |
| `/contact` | お問い合わせ |

---

## ブログ記事の管理

### 記事ファイルの場所

```
content/posts/
  ├ seo-basics-2026.md
  ├ web-ads-roi.md
  └ sns-marketing-strategy.md
```

### 記事の作成方法

`content/posts/` に `.md` ファイルを作成します。ファイル名がURLのスラッグになります。

**例：** `content/posts/new-article.md` → `/blog/new-article`

### フロントマター（記事情報）

各記事ファイルの先頭に以下の形式で記事情報を記載します。

```markdown
---
title: "記事タイトル"
date: "2026-03-21"
excerpt: "記事一覧に表示される概要文（100〜150文字程度）"
thumbnail: "/images/posts/your-image.png"
tags: ["SEO", "マーケティング"]
---

## 見出し

本文をここに書きます...
```

| フィールド | 必須 | 説明 |
|---|---|---|
| `title` | 必須 | 記事タイトル |
| `date` | 必須 | 公開日（`YYYY-MM-DD` 形式） |
| `excerpt` | 必須 | 一覧ページに表示される概要文 |
| `thumbnail` | 任意 | サムネイル画像のパス（省略時はデフォルト画像） |
| `tags` | 任意 | タグの配列（複数指定可） |

---

## サムネイル画像

### 置き場所

```
public/images/posts/
  ├ seo-basics.png
  ├ web-ads.png
  └ sns-marketing.png
```

### 推奨仕様

| 項目 | 推奨値 |
|---|---|
| サイズ | 1200 × 630 px（OGP兼用） |
| 形式 | PNG / JPG / WebP |
| ファイルサイズ | 300KB 以下推奨 |
| アスペクト比 | 16:9（一覧カードと詳細ヘッダーで使用） |

### フロントマターでの指定方法

```markdown
thumbnail: "/images/posts/your-image.png"
```

`public/` 以下のパスを `/` から始まる形で指定します。
`public/images/posts/sample.png` → `"/images/posts/sample.png"`

### 画像がない場合

`thumbnail` を省略するか存在しないパスを指定すると、画像エリアはグレーの背景で表示されます。

---

## SEO設定

### Google Analytics（GA4）

`.env.local` の `NEXT_PUBLIC_GA_ID` に測定IDを設定します。

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Google Search Console

`.env.local` の `NEXT_PUBLIC_GSC_VERIFICATION` に確認コードを設定します。

```
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

### ドメイン変更

サイトのURLを変更する場合は以下のファイルの `https://djts.co.jp` を書き換えてください。

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/sitemap.ts`

---

## デプロイ（Vercel推奨）

1. GitHubにプッシュ
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. 環境変数（`NEXT_PUBLIC_GA_ID` など）をVercelのダッシュボードで設定
4. デプロイ完了後、Google Search Consoleでサイトマップ（`/sitemap.xml`）を登録
